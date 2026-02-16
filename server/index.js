import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// DB Config
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pecpod')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
import projectRoutes from './routes/projects.js';
import insightRoutes from './routes/insights.js';
import uploadRoutes from './routes/upload.js';
import authRoutes from './routes/auth.js';

app.use('/api/projects', projectRoutes);
app.use('/api/insights', insightRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Pecpod API Running' });
});

// Serve frontend static files in production
if (process.env.NODE_ENV === 'production') {
    // Check for "public" (cPanel deployment) or "dist" (local build)
    let frontendPath = path.join(__dirname, '../public');
    if (!fs.existsSync(frontendPath)) {
        frontendPath = path.join(__dirname, '../dist');
    }

    // Serve static files
    app.use(express.static(frontendPath));

    // Handle React routing - serve index.html for all non-API routes
    app.use((req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Pecpod API Running - Development Mode');
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
