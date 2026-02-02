import express from 'express';
import Insight from '../models/Insight.js';

const router = express.Router();

// @route   GET /api/insights
// @desc    Get all insights
router.get('/', async (req, res) => {
    try {
        const insights = await Insight.find().sort({ createdAt: -1 });
        res.json(insights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/insights/:id
// @desc    Get single insight by _id OR custom id
router.get('/:id', async (req, res) => {
    try {
        let insight;
        // Check if valid ObjectId
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            insight = await Insight.findById(req.params.id);
        }

        // If not found by ObjectId or not ObjectId, try custom id
        if (!insight) {
            insight = await Insight.findOne({ id: req.params.id });
        }

        if (!insight) return res.status(404).json({ message: 'Insight not found' });
        res.json(insight);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/insights
// @desc    Create an insight
router.post('/', async (req, res) => {
    const insightData = req.body;
    // Generate ID if missing
    if (!insightData.id) {
        insightData.id = Date.now().toString();
    }

    const insight = new Insight(insightData);
    try {
        const newInsight = await insight.save();
        res.status(201).json(newInsight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   PUT /api/insights/:id
// @desc    Update an insight
router.put('/:id', async (req, res) => {
    try {
        let query = { id: req.params.id };
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            query = { _id: req.params.id };
        }

        // Try finding by _id if it looks like one, otherwise fallback to finding by custom 'id'
        // Actually, we can just try to find based on the query derived above.
        // If the URL param was an ObjectId, we search by _id. If not, we search by custom id.
        // However, to be safe (in case a custom ID looks like an ObjectId), we could try both, but usually that's rare.
        // Better approach: mimic the get logic or use findOneAndUpdate directly with a smart query.

        // Revised robust logic:
        let insight;
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            insight = await Insight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        }

        if (!insight) {
            insight = await Insight.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        }

        if (!insight) return res.status(404).json({ message: 'Insight not found' });
        res.json(insight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   DELETE /api/insights/:id
// @desc    Delete an insight
router.delete('/:id', async (req, res) => {
    try {
        let insight;
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            insight = await Insight.findByIdAndDelete(req.params.id);
        }

        if (!insight) {
            insight = await Insight.findOneAndDelete({ id: req.params.id });
        }

        if (!insight) return res.status(404).json({ message: 'Insight not found' });
        res.json({ message: 'Insight deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
