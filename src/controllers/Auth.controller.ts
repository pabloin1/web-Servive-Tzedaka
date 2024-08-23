import { Request, Response } from "express";
import UserRepository from "../repositories/User.repository";
import Jwt from "../helper/JWT.helper";
import { Argon2Encryption } from "../helper/Argon2Encryption.helper";

const encryption = new Argon2Encryption()
const jwt = new Jwt()


export const login = async (req: Request, res: Response): Promise<Response> => {
  const { name, password } = req.body;

  const user = await UserRepository.findByEmail(name);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await encryption.comparePassword(
    password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.generateToken(user.id, user.email);
    return res.status(200).json({ value:token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
