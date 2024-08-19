import { Response, NextFunction } from 'express';
import AuthRequest  from '../interfaces/AuthRequest.interface';
import JWTService from '../services/JWT.service';

const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    try {
        const user = JWTService.verifyToken(token) as { id: number; email: string };
        req.user = user; 
        next(); 
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

export default authenticateToken;
