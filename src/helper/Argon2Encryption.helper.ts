import argon2 from "argon2";
import { IEncryptionInterface } from "../interfaces/Encryption.interface";

export class Argon2Encryption implements IEncryptionInterface {
  private options = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 3,
    parallelism: 1,
  };
  
  constructor() {
    this.options;
  }

  async hashPassword(password: string): Promise<string> {
    return argon2.hash(password, this.options);
  }

  async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    try {
      return await argon2.verify(hashedPassword, password);
    } catch (err) {
      return false;
    }
  }
}
