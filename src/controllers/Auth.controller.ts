import { Request, Response } from "express";
import UserRepository from "../repositories/User.repository";
import JWTService from "../services/JWT.service";
import { Argon2EncryptionService } from "../services/Argon2Encryption.service";

const encryptionService = new Argon2EncryptionService();

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const user = await UserRepository.findByEmail(email);
  console.log(user);
  console.log(user?.password);

  const pass = await encryptionService.hashPassword(password);

  if (user) {
    const isPasswordValid = await encryptionService.comparePassword(
      password,
      pass
    );
    console.log(isPasswordValid);

    if (isPasswordValid) {
      const token = JWTService.generateToken(user.id, user.email);
      return res.status(200).json({ token });
    }
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
