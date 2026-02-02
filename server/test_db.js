import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

console.log('Connecting to MongoDB...');
// Force localhost if env is missing
const URI = process.env.MONGO_URI || 'mongodb://localhost:27017/pecpod';
console.log('URI:', URI);

mongoose.connect(URI)
    .then(async () => {
        console.log('MongoDB connected successfully');
        const count = await Project.countDocuments();
        console.log(`Projects count: ${count}`);

        // Find one project to show
        if (count > 0) {
            const p = await Project.findOne();
            console.log('Sample Project:', p.title);
        }

        process.exit();
    })
    .catch(err => {
        console.error('Connection Error:', err);
        process.exit(1);
    });
