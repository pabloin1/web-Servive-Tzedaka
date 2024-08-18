import { Request, Response } from "express";
import UserRepository from "../repositories/User.repository";
import JWTService from "../services/JWT.service";
import {BCryptEncryptionService} from "../services/BCryptEncryption.service";
const encryptionService = new BCryptEncryptionService();

export const login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    
    const user = await UserRepository.findByEmail(email);

    if (user && await encryptionService.comparePassword(password, user.password ?? "")) {
        
        const token = JWTService.generateToken(user.id, user.email);

        return res.status(200).json({ token });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
};
