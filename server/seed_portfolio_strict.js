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
const IMG_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
const DOC_EXTENSIONS = ['.docx'];

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pecpod')
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Helper: Check if file is "Best" (Cover/Main)
const isBestImage = (filename, size) => {
    const lower = filename.toLowerCase();

    // --- Priority 1: Explicit Visual Keyowrds ---
    if (lower.includes('mockup')) return 1500; // Mockups are usually best
    if (lower.includes('cover')) return 1000;
    if (lower.includes('main') || lower.includes('hero')) return 800;
    if (lower.includes('final')) return 500;

    // --- Penalties: Avoid "Worded" Images (Scans, Pages) ---
    // If it says "page 1", "pg3", "scan", "screenshot", "text"
    if (lower.includes('page') || lower.includes('pg') || /\d+/.test(lower) && !lower.includes('cover')) {
        // Only penalize numbering if it's NOT a cover
        return size / 1000; // Heavily penalize pages
    }
    if (lower.includes('screenshot') || lower.includes('scan') || lower.includes('doc')) {
        return size / 2000;
    }

    // Tie-breaker: File size (assume larger = higher quality)
    return size;
};

async function seedStrictPortfolio() {
    try {
        if (!fs.existsSync(PORTFOLIO_ROOT)) {
            console.error(`Directory not found: ${PORTFOLIO_ROOT}`);
            process.exit(1);
        }

        const projectsToInsert = [];

        // 1. Get Top-Level Categories
        const categories = fs.readdirSync(PORTFOLIO_ROOT).filter(f =>
            fs.statSync(path.join(PORTFOLIO_ROOT, f)).isDirectory()
        );

        console.log(`Found categories: ${categories.join(', ')}`);

        for (const category of categories) {
            const categoryPath = path.join(PORTFOLIO_ROOT, category);

            // 2. Get Project Subfolders
            const projectFolders = fs.readdirSync(categoryPath).filter(f =>
                fs.statSync(path.join(categoryPath, f)).isDirectory()
            );

            console.log(`  Processing ${category}: Found ${projectFolders.length} projects.`);

            for (const projectFolder of projectFolders) {
                const projectPath = path.join(categoryPath, projectFolder);
                const items = fs.readdirSync(projectPath);

                const images = [];
                const docs = [];

                // 3. Gather Assets
                items.forEach(file => {
                    const filePath = path.join(projectPath, file);
                    const ext = path.extname(file).toLowerCase();
                    const stats = fs.statSync(filePath);

                    if (IMG_EXTENSIONS.includes(ext)) {
                        const relPath = path.relative(path.join(__dirname, '../public'), filePath);
                        const webPath = '/' + relPath.split(path.sep).join('/');
                        images.push({
                            filename: file,
                            path: webPath,
                            size: stats.size
                        });
                    } else if (DOC_EXTENSIONS.includes(ext)) {
                        docs.push(filePath);
                    }
                    // PDFs are strictly IGNORED as per request
                });

                if (images.length === 0) {
                    console.log(`    Skipping ${projectFolder}: No images found.`);
                    continue;
                }

                // 4. Sort Images (Find Cover)
                const sortedImages = images.sort((a, b) => {
                    return isBestImage(b.filename, b.size) - isBestImage(a.filename, a.size);
                });
                const coverImage = sortedImages[0];
                const otherImages = sortedImages.slice(1);

                // 5. Extract Doc Content
                let docContent = '';
                for (const docPath of docs) {
                    try {
                        const result = await mammoth.convertToHtml({ path: docPath });
                        docContent += `<div class="doc-content">${result.value}</div>`;
                    } catch (e) {
                        console.warn(`    Failed to read doc in ${projectFolder}:`, e.message);
                    }
                }

                // 6. Build Content HTML (Magazine Layout)
                let contentHtml = '';

                // Helper: Creative Fallback Generator
                const getCreativeFallback = (cat, title) => {
                    const t = title.replace(/-/g, ' ');

                    const commonIntro = `
                        <div class="magazine-intro">
                            <p>${t}</p>
                        </div>
                    `;

                    let body = '';

                    if (cat.includes('Brand') || cat.includes('Logo')) {
                        body = `<p class="project-description-paragraph">
                            For <strong>${t}</strong>, the objective was to craft a visual identity that resonates with the core values of the brand while ensuring distinct market positioning. We approached this project with a focus on timeless design principles, ensuring the visual language remains relevant and impactful across all touchpoints. The result is a cohesive system that speaks to the audience with clarity and confidence.
                        </p>`;
                    } else if (cat.includes('Report') || cat.includes('Publish') || cat.includes('Government') || cat.includes('Policy')) {
                        body = `<p class="project-description-paragraph">
                            Communicating complex information requires a delicate balance of structure and aesthetics. For the <strong>${t}</strong>, we focused on data visualization and clear typographic hierarchy to transform dense content into an engaging narrative. Our design approach prioritized readability and user flow, ensuring that key insights are accessible and compelling to stakeholders.
                        </p>`;
                    } else if (cat.includes('Campaign') || cat.includes('Digital') || cat.includes('Social')) {
                        body = `<p class="project-description-paragraph">
                            In the digital age, capturing attention is paramount. The <strong>${t}</strong> campaign was designed to cut through the noise, utilizing bold imagery and strategic messaging. We developed a series of assets that are not only visually striking but also optimized for engagement, driving the narrative forward across various digital platforms.
                        </p>`;
                    } else {
                        // Generic High-End
                        body = `<p class="project-description-paragraph">
                            <strong>${t}</strong> represents a synthesis of strategic thinking and creative execution. We partnered with the client to understand their unique challenges, delivering a solution that is both functional and inspiring. From concept to final delivery, every detail was considered to ensure the highest standard of quality and design excellence.
                        </p>`;
                    }

                    return commonIntro + body;
                };

                // Intro Text
                if (docContent) {
                    // CLEANING: Remove unrelated sections if they appear in the doc
                    // Specific fix for Agribiz doc which contains "NAYA REPORT"
                    const knownHeaders = ['NAYA REPORT', 'SAFIRE REPORT', 'UHAI REPORT', 'CHANGING FACES'];

                    // Simple cleaning: if we find a header that matches another project, cut off text there.
                    // But we need to be careful not to cut off the CURRENT project's header if it's at the start.

                    // Remove "Agribiz Report" Title from the start of the body text if it exists (redundant with main title)
                    // And cut off at "NAYA REPORT"

                    let cleanText = docContent;

                    // 1. Remove "NAYA REPORT" and everything after it
                    const nayaIndex = cleanText.indexOf('NAYA REPORT');
                    if (nayaIndex > 100) { // Ensure it's not the main title (unlikely for Agribiz)
                        cleanText = cleanText.substring(0, nayaIndex);
                    }

                    // 2. Remove "Challenge" and "Results" headers if they are just plain text without styling?
                    // The user liked the content, just wanted "NAYA REPORT" section gone.

                    const textLength = cleanText.replace(/<[^>]*>/g, '').length;
                    if (textLength < 800) {
                        contentHtml += `<div class="magazine-intro">${cleanText}</div>`;
                    } else {
                        contentHtml += `<div class="project-description-paragraph">${cleanText}</div>`;
                    }
                } else {
                    // FALLBACK: Use Creative Content if no doc found
                    contentHtml += getCreativeFallback(category, projectFolder);
                    // Also set a default description for the meta field
                    if (!docContent) {
                        docContent = `A strategic design project focused on ${projectFolder}.`;
                    }
                }

                // Image Grid Cycle
                if (otherImages.length > 0) {
                    let i = 0;
                    while (i < otherImages.length) {
                        const remaining = otherImages.length - i;
                        if (remaining >= 2 && i % 3 === 1) {
                            // Two Column
                            contentHtml += `
                                <div class="magazine-grid-2">
                                    <div class="magazine-grid-item"><img src="${otherImages[i].path}" class="magazine-grid-img" loading="lazy"></div>
                                    <div class="magazine-grid-item"><img src="${otherImages[i + 1].path}" class="magazine-grid-img" loading="lazy"></div>
                                </div>`;
                            i += 2;
                        } else if (i % 3 === 0) {
                            // Full Width
                            contentHtml += `<img src="${otherImages[i].path}" class="magazine-image-full" loading="lazy">`;
                            i += 1;
                        } else {
                            // Center
                            contentHtml += `
                                <div class="project-detail-image-wrapper">
                                    <img src="${otherImages[i].path}" class="project-detail-image" loading="lazy">
                                </div>`;
                            i += 1;
                        }
                    }
                }

                projectsToInsert.push({
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
                    title: projectFolder, // Use Folder Name as Title
                    category: category,
                    image: coverImage.path,
                    description: docContent.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...',
                    content: contentHtml,
                    client: 'PecPod Client',
                    date: new Date().getFullYear().toString(),
                    size: 'medium',
                    isLight: false
                });
            }
        }
        const MANUAL_PROJECTS = [
            {
                id: 'video-1-' + Date.now(),
                title: 'Visual Storytelling: Documentary',
                category: 'Story telling',
                image: 'https://img.youtube.com/vi/ttSURoLacfY/maxresdefault.jpg', // YouTube Thumbnail
                description: 'A compelling visual narrative exploring human stories through the lens of documentary filmmaking.',
                content: `
                    <div class="magazine-intro"><p>Visual Storytelling: Documentary</p></div>
                    <p class="project-description-paragraph">This piece captures the essence of the subject with intimacy and respect. Through careful composition and editing, we weave a narrative that engages the viewer emotionally.</p>
                    <div class="video-responsive" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-top: 2rem; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                        <iframe src="https://www.youtube.com/embed/ttSURoLacfY" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `,
                client: 'PecPod Client',
                date: new Date().getFullYear().toString(),
                size: 'large',
                isLight: false
            },
            {
                id: 'video-2-' + Date.now(),
                title: 'Impact Narrative',
                category: 'Story telling',
                image: 'https://img.youtube.com/vi/H70qg7lc2tI/maxresdefault.jpg',
                description: 'Highlighting community impact through powerful visual storytelling.',
                content: `
                    <div class="magazine-intro"><p>Impact Narrative</p></div>
                    <p class="project-description-paragraph">Every frame is chosen to convey the weight and significance of the story. This film serves as a testament to the power of visual media in driving social change.</p>
                     <div class="video-responsive" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-top: 2rem; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                        <iframe src="https://www.youtube.com/embed/H70qg7lc2tI" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `,
                client: 'PecPod Client',
                date: new Date().getFullYear().toString(),
                size: 'medium',
                isLight: false
            },
            {
                id: 'video-3-' + Date.now(),
                title: 'Creative Framework',
                category: 'Story telling',
                image: 'https://img.youtube.com/vi/o3JEVG1nJvw/maxresdefault.jpg',
                description: 'An exploration of creative frameworks in modern storytelling.',
                content: `
                    <div class="magazine-intro"><p>Creative Framework</p></div>
                    <p class="project-description-paragraph">Innovation in storytelling moves us forward. This project explores new methods of narrative delivery, combining traditional techniques with modern visual styles.</p>
                     <div class="video-responsive" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-top: 2rem; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                        <iframe src="https://www.youtube.com/embed/o3JEVG1nJvw" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `,
                client: 'PecPod Client',
                date: new Date().getFullYear().toString(),
                size: 'large',
                isLight: false
            }
        ];

        // Merge Manual Projects
        projectsToInsert.push(...MANUAL_PROJECTS);

        if (projectsToInsert.length > 0) {
            console.log('Clearing old projects...');
            await Project.deleteMany({});

            console.log(`Inserting ${projectsToInsert.length} projects...`);
            await Project.insertMany(projectsToInsert);
            console.log('✅ Portfolio seeded successfully!');
        } else {
            console.log('No mapped projects found.');
        }

        process.exit(0);

    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

seedStrictPortfolio();
