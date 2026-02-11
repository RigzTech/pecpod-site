import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Project from './models/Project.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PORTFOLIO_ROOT = path.join(__dirname, '../public/portfolio-files');
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pecpod')
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Helper to recursively get files
function getFiles(dir, fileList = [], rootDir = '') {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getFiles(filePath, fileList, rootDir);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (ALLOWED_EXTENSIONS.includes(ext)) {
                fileList.push({
                    absolutePath: filePath,
                    relativePath: path.relative(rootDir, filePath)
                });
            }
        }
    });
    return fileList;
}

// Main seeding function
const seedPortfolio = async () => {
    try {
        console.log(`Scanning directory: ${PORTFOLIO_ROOT}`);

        if (!fs.existsSync(PORTFOLIO_ROOT)) {
            console.error(`Directory not found: ${PORTFOLIO_ROOT}`);
            process.exit(1);
        }

        const projectFiles = [];

        // Get top-level categories (folders)
        const categories = fs.readdirSync(PORTFOLIO_ROOT).filter(file => {
            return fs.statSync(path.join(PORTFOLIO_ROOT, file)).isDirectory();
        });

        console.log(`Found categories: ${categories.join(', ')}`);

        // Iterate through each category folder
        categories.forEach(category => {
            const categoryPath = path.join(PORTFOLIO_ROOT, category);
            const files = getFiles(categoryPath, [], PORTFOLIO_ROOT); // Pass PORTFOLIO_ROOT for relative path calc

            files.forEach(file => {
                // Ensure the relative path starts with the category so we can build the URL
                // Actually getFiles with PORTFOLIO_ROOT as rootDir returns e.g. "Brand identity\Logo.png"

                // Clean up title: filename without extension, replace separators with space
                const filename = path.basename(file.absolutePath, path.extname(file.absolutePath));
                const title = filename
                    .replace(/[-_]/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();

                // Build web-accessible URL
                // file.relativePath is like "Brand identity\Logo.png" (windows)
                // convert to web path: "/portfolio-files/Brand identity/Logo.png"
                const webPath = '/portfolio-files/' + file.relativePath.split(path.sep).join('/');

                projectFiles.push({
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5), // Unique ID
                    title: title,
                    category: category,
                    image: webPath,
                    description: `Portfolio project in ${category}`,
                    client: 'PecPod Client',
                    date: new Date().getFullYear().toString(),
                    size: 'medium', // Randomize?
                    isLight: false
                });
            });
        });

        console.log(`Found ${projectFiles.length} valid project files.`);

        if (projectFiles.length === 0) {
            console.log('No files to seed.');
            process.exit(0);
        }

        // Clear existing projects
        console.log('Clearing existing projects...');
        await Project.deleteMany({});

        // Insert new projects
        console.log(`Inserting ${projectFiles.length} projects...`);
        const result = await Project.insertMany(projectFiles);

        console.log('✅ Portfolio seeded successfully!');
        console.log(`${result.length} projects added.`);

        process.exit(0);
    } catch (err) {
        console.error('Seeding failed:', err);
        process.exit(1);
    }
};

seedPortfolio();
