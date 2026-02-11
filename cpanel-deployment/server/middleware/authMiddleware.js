import jwt from 'jsonwebtoken';

/**
 * Authentication middleware to protect routes
 * Verifies JWT token from Authorization header
 */
const authMiddleware = (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');

        // Add user from payload to request object
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default authMiddleware;
