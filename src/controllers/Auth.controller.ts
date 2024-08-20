import { Request, Response } from "express";
import UserRepository from "../repositories/User.repository";
import JWTService from "../services/JWT.service";
import { Argon2EncryptionService } from "../services/Argon2Encryption.service";

const encryptionService = new Argon2EncryptionService();

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const user = await UserRepository.findByEmail(email);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await encryptionService.comparePassword(
    password,
    user.password
  );

  if (isPasswordValid) {
    const token = JWTService.generateToken(user.id, user.email);
    return res.status(200).json({ value:token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
