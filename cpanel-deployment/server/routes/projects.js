import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/projects/:id
// @desc    Get single project by _id OR custom id
router.get('/:id', async (req, res) => {
    try {
        let project;
        // Check if valid ObjectId
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            project = await Project.findById(req.params.id);
        }

        // If not found by ObjectId or not ObjectId, try custom id
        if (!project) {
            project = await Project.findOne({ id: req.params.id });
        }

        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/projects
// @desc    Create a project
router.post('/', async (req, res) => {
    const projectData = req.body;
    // Generate simple ID if not provided (e.g. for new manual entries)
    if (!projectData.id) {
        projectData.id = 'proj-' + Date.now();
    }

    const project = new Project(projectData);
    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
router.put('/:id', async (req, res) => {
    try {
        let query = { _id: req.params.id };

        // If not a valid ObjectId, assume it's a custom 'id'
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            query = { id: req.params.id };
        }

        const project = await Project.findOneAndUpdate(query, req.body, { new: true });
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
router.delete('/:id', async (req, res) => {
    try {
        let query = { _id: req.params.id };

        // If not a valid ObjectId, assume it's a custom 'id'
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            query = { id: req.params.id };
        }

        const project = await Project.findOneAndDelete(query);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
