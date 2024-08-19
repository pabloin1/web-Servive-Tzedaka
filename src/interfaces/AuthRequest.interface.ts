import { Request } from 'express';

export default interface AuthRequestInterface extends Request {
    user?: {
        id: number;
        email: string;
    };
}