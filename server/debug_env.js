import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

console.log('--- Environment Check ---');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGO_URI exists:', !!process.env.MONGO_URI);

console.log('--- DB Connection Test ---');
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pecpod';
console.log('Connecting to:', uri);

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB connected successfully');
        process.exit(0);
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

setTimeout(() => {
    console.log('Timeout reached. Connection taking too long.');
    process.exit(1);
}, 10000);
