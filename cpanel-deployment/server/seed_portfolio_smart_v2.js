import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mammoth from 'mammoth';
import Project from './models/Project.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PORTFOLIO_ROOT = path.join(__dirname, '../public/portfolio-files');
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
const DOC_EXTENSIONS = ['.docx'];

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pecpod')
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Helper: Normalize string for comparison
const normalize = (str) => str.toLowerCase().replace(/[-_.]/g, ' ').trim();

// Helper: Get smart grouping key based on user rules
const getGroupKey = (filename) => {
    const name = path.basename(filename, path.extname(filename));
    const lower = normalize(name);

    // --- RULE 1: Specific Keyword Overrides (Global) ---
    if (lower.includes('election')) return 'Elections';
    if (lower.includes('changing faces')) return 'Changing Faces Changing Spaces';
    if (lower.includes('safire')) return 'Safire';
    if (lower.includes('uhai')) return 'UHAI';
    if (lower.includes('agribiz')) return 'Agribiz';

    // --- RULE 2: Government Specifics ---
    if (lower.includes('ayrh')) return 'AYRH Framework';
    if (lower.includes('mid term') || lower.includes('mid-term')) return 'Mid Term Reports';
    if (lower.includes('covid')) return 'National COVID 19';
    if (lower.includes('somaliland')) return 'Somaliland';

    // --- RULE 3: Annual Reports handling ---
    // If it starts with "Annual Report", try to find the organization name in the rest
    // But usually the organization name IS the prefix like "Agribiz Annual Report".
    // If filename is JUST "Annual Report 2020", it might be a generic internal one.
    // We already handled explicit orgs above.

    // --- RULE 4: Categories like "Logos", "Posters" ---
    // Often these are folder names.
    // If filename is "Logo Design", it's generic.
    // If filename is "Apple Logo", it's Apple.

    // Default Heuristic: First 2 words, but be careful of "Annual Report" being the first 2 words.
    // If first 2 words are "Annual Report", use the WHOLE name (minus numbers) to distinguish "Annual Report UHAI" vs "Annual Report Agribiz"?
    // Or better: use the *suffix* if prefix is generic?

    const parts = lower.split(' ');

    // If first words are generic, try to find a distinguishing identifier
    const generics = ['annual', 'report', 'brochure', 'flyer', 'poster', 'logo', 'design'];
    if (generics.includes(parts[0])) {
        // It's a "Report ...", try to group by the whole thing (minus numbers)
        return parts.filter(p => isNaN(p) && p.length > 2).join(' ');
    }

    // Standard Fallback: First 2 words or 3 if short
    if (parts.length >= 2) {
        // Special case: "The Future of..." -> 3 words
        if (['the', 'a', 'an'].includes(parts[0])) return parts.slice(0, 3).join(' ');
        return parts.slice(0, 2).join(' ');
    }

    return parts[0].substring(0, 10);
};

// Helper: Check if file is "Best" (Cover/Main)
const isBestImage = (filename, size) => {
    const lower = filename.toLowerCase();
    if (lower.includes('cover')) return 100;
    if (lower.includes('main')) return 80;
    if (lower.includes('front')) return 70;
    return size; // Tie-breaker: File size (assume larger = higher quality/print version)
};

async function seedSmartPortfolio() {
    try {
        if (!fs.existsSync(PORTFOLIO_ROOT)) {
            console.error(`Directory not found: ${PORTFOLIO_ROOT}`);
            process.exit(1);
        }

        const projectGroups = new Map(); // Key: FolderPath + GroupKey, Value: { category, files: [], docs: [] }

        // Recursive Scan function
        function scanDir(dir, rootDir) {
            const items = fs.readdirSync(dir);

            // Separate files and subdirectories
            const files = items.filter(f => !fs.statSync(path.join(dir, f)).isDirectory());
            const subdirs = items.filter(f => fs.statSync(path.join(dir, f)).isDirectory());

            // 1. Process Files in Current Directory -> Group Them
            files.forEach(file => {
                const ext = path.extname(file).toLowerCase();
                const filePath = path.join(dir, file);
                const stats = fs.statSync(filePath);

                if (ALLOWED_EXTENSIONS.includes(ext) || DOC_EXTENSIONS.includes(ext)) {
                    // Determine Group Key
                    const groupKey = getGroupKey(file);
                    // Unique ID for the project group: ParentFolder + GroupPrefix
                    // e.g. "Brand Identity/Logo Design/Apple"
                    const folderRelative = path.relative(rootDir, dir);
                    const uniqueGroup = path.join(folderRelative, groupKey);

                    if (!projectGroups.has(uniqueGroup)) {
                        // Category is the Top Level Folder
                        const category = folderRelative.split(path.sep)[0] || 'Uncategorized';
                        projectGroups.set(uniqueGroup, {
                            id: uniqueGroup,
                            title: groupKey, // Temporary title
                            category: category, // Use folder category logic or specific mapping
                            folder: folderRelative,
                            images: [],
                            docs: []
                        });
                    }

                    const group = projectGroups.get(uniqueGroup);

                    if (ALLOWED_EXTENSIONS.includes(ext)) {
                        // Convert to web path
                        const relPath = path.relative(path.join(__dirname, '../public'), filePath);
                        const webPath = '/' + relPath.split(path.sep).join('/');

                        group.images.push({
                            filename: file,
                            path: webPath,
                            size: stats.size
                        });
                    } else if (DOC_EXTENSIONS.includes(ext)) {
                        group.docs.push(filePath);
                    }
                }
            });

            // 2. Recurse into subdirectories
            subdirs.forEach(subdir => {
                scanDir(path.join(dir, subdir), rootDir);
            });
        }

        // Start scanning
        scanDir(PORTFOLIO_ROOT, PORTFOLIO_ROOT);

        console.log(`Found ${projectGroups.size} potential project groups.`);

        // Process Groups into Project Objects
        const projectsToInsert = [];

        for (const [key, group] of projectGroups.entries()) {
            if (group.images.length === 0) continue; // Skip docs-only groups (unlikely but possible)

            // 1. Determine "Best" Image (Cover)
            const sortedImages = group.images.sort((a, b) => {
                return isBestImage(b.filename, b.size) - isBestImage(a.filename, a.size);
            });
            const coverImage = sortedImages[0];
            const otherImages = sortedImages.slice(1);

            // 2. Extract Text from Docs
            let docContent = '';
            for (const docPath of group.docs) {
                try {
                    const result = await mammoth.convertToHtml({ path: docPath });
                    docContent += `<div class="doc-content">${result.value}</div>`;
                } catch (e) {
                    console.warn(`Failed to read doc ${docPath}:`, e.message);
                }
            }

            // 3. Build HTML Content
            // Intro (Doc Text) -> Wrap in magazine-intro if short, or just div
            let contentHtml = '';

            if (docContent) {
                // Heuristic: If doc content is short (< 500 chars), use magazine-intro style
                // Otherwise use standard prose
                const textLength = docContent.replace(/<[^>]*>/g, '').length;
                if (textLength < 800) {
                    contentHtml += `<div class="magazine-intro">${docContent}</div>`;
                } else {
                    contentHtml += `<div class="project-description-paragraph">${docContent}</div>`;
                }
            }

            // Clean up title
            const title = group.images[0].filename
                .replace(/\.[^/.]+$/, "") // remove extension
                .replace(/[-_]/g, " ")
                .replace(/\d+$/, "") // remove trailing numbers
                .trim();

            // Append other images with Magazine Layout Cycle
            if (otherImages.length > 0) {
                // Layout Pattern Cycle:
                // 0: Full Width (Impact)
                // 1: Two Columns (Comparison)
                // 2: Standard Center (Detail)
                // Repeat

                let i = 0;
                while (i < otherImages.length) {
                    const remaining = otherImages.length - i;

                    // Logic to choose layout
                    // If we have at least 2 images and we are at a "Two Column" slot in cycle (mod 3 == 1)
                    if (remaining >= 2 && i % 3 === 1) {
                        // Two Column Grid
                        const img1 = otherImages[i];
                        const img2 = otherImages[i + 1];

                        contentHtml += `
                            <div class="magazine-grid-2">
                                <div class="magazine-grid-item">
                                    <img src="${img1.path}" class="magazine-grid-img" alt="Project detail left">
                                </div>
                                <div class="magazine-grid-item">
                                    <img src="${img2.path}" class="magazine-grid-img" alt="Project detail right">
                                </div>
                            </div>
                        `;
                        i += 2;
                    } else if (i % 3 === 0) {
                        // Full Width Breakout
                        const img = otherImages[i];
                        contentHtml += `
                            <img src="${img.path}" class="magazine-image-full" alt="Full width detail">
                        `;
                        i += 1;
                    } else {
                        // Standard Center Image (Fallback)
                        const img = otherImages[i];
                        contentHtml += `
                            <div class="project-detail-image-wrapper">
                                <img src="${img.path}" class="project-detail-image" alt="Project detail center">
                            </div>
                        `;
                        i += 1;
                    }
                }
            }

            // Capitalize title words
            const finalTitle = title.split(' ')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');

            projectsToInsert.push({
                id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
                title: finalTitle,
                category: group.category, // e.g. "Brand identity"
                image: coverImage.path,
                description: docContent.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...', // Plain text excerpt
                content: contentHtml,
                client: 'PecPod Client',
                date: new Date().getFullYear().toString(),
                size: 'medium', // Randomize later if needed
                isLight: false
            });
        }

        // Clear and Insert
        if (projectsToInsert.length > 0) {
            console.log('Clearing old projects...');
            await Project.deleteMany({});

            console.log(`Inserting ${projectsToInsert.length} projects...`);
            await Project.insertMany(projectsToInsert);
            console.log('✅ Success!');
        } else {
            console.log('No projects found to insert.');
        }

        process.exit(0);

    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

seedSmartPortfolio();
