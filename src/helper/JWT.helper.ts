import jwt from "jsonwebtoken";
import { JwtInterface } from "../interfaces/Jwt.interface";
import config from "../config/Config";

export class Jwt implements JwtInterface {
  private secret: string;

  constructor() {
    this.secret = config.jwtSecret;
  }

  generateToken(id: number, email: string): string {
    return jwt.sign({ id, email }, this.secret, { expiresIn: "8h" });
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.secret);
  }
}

export default Jwt;
