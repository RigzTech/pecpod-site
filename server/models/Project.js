import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // Custom ID for routing (e.g., 'mag-1')
    title: { type: String, required: true },
    category: { type: String, required: true },
    client: { type: String },
    date: { type: String },
    role: { type: String },
    image: { type: String, required: true },
    description: { type: String }, // Added for short description
    link: { type: String },        // Added for external link
    document: { type: String },
    size: { type: String, default: 'medium' },
    isLight: { type: Boolean, default: false },
    isVideo: { type: Boolean, default: false },
    content: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Project', ProjectSchema);
