import jwt from "jsonwebtoken";
import { JwtInterface } from "../interfaces//Jwt.interface";

class JWTService implements JwtInterface {
    private secret: string;

    constructor() {
        this.secret = process.env.SECRETKEY || 'hola'; 
    }

    generateToken(id: number, email: string): string {
        return jwt.sign({ id, email }, this.secret, { expiresIn: "1h" });
    }

    verifyToken(token: string): any {
        return jwt.verify(token, this.secret);
    }
}

export default new JWTService();