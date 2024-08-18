import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        
        const secretKey:string = process.env.JWT_SECRET || ""; 
        const decoded = jwt.verify(token, secretKey);
        
        req.body.user = decoded;
        next();
    } catch (err) {
        return res.status(400).json({ error: 'Invalid token.' });
    }
};

export default authMiddleware;
