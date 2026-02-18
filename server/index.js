import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server folder OR root folder
const envPath = fs.existsSync(path.join(__dirname, '.env'))
    ? path.join(__dirname, '.env')
    : path.join(__dirname, '../.env');
dotenv.config({ path: envPath });

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
    .catch(err => {
        console.error('CRITICAL: MongoDB connection error:');
        console.error(err);
    });

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
    res.json({
        status: 'ok',
        message: 'Pecpod API Running',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        env: process.env.NODE_ENV
    });
});

// Root route
app.get('/', (req, res) => {
    res.send('Pecpod API Running');
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
