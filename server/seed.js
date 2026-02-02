import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import User from './models/User.js';
// Import data from frontend file
// Note: We need to use a relative path that works from where we run the script
import { portfolioData } from '../src/data/portfolioData.js';
import { insightsData } from '../src/data/insightsData.js';
import bcrypt from 'bcryptjs';
import Insight from './models/Insight.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pecpod', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const seedDB = async () => {
    try {
        // Clear existing data
        await Project.deleteMany({});
        await User.deleteMany({});

        console.log('Cleared Projects and Users...');

        // Seed Projects
        // Map frontend ID to database logic if needed, but we can just dump
        const projects = portfolioData.map(p => ({
            ...p,
            image: p.image // Keep paths as is, frontend will need to handle both local and uploads
        }));

        await Project.insertMany(projects);
        console.log(`Seeded ${projects.length} projects.`);

        // Seed Insights
        await Insight.deleteMany({});
        const insights = insightsData.map(i => ({
            ...i,
            id: i.id.toString(), // Ensure string ID
            image: i.image
        }));
        await Insight.insertMany(insights);
        console.log(`Seeded ${insights.length} insights.`);

        // Seed Admin User
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash('admin123', salt);

        const admin = new User({
            username: 'admin',
            password: password
        });

        await admin.save();
        console.log('Seeded Admin User (admin/admin123)');

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
