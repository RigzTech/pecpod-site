import mongoose from 'mongoose';

const InsightSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: false }, // Optional since insights are not categorized
    summary: { type: String },
    excerpt: { type: String }, // Short preview text
    image: { type: String }, // Cover image
    content: { type: String }, // Full HTML content
    author: { type: String },
    readTime: { type: String, default: '5 min read' },
    date: { type: String, default: () => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Insight', InsightSchema);
