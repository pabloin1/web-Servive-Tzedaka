"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTService {
    constructor() {
        this.secret = process.env.SECRETKEY || 'hola';
    }
    generateToken(id, email) {
        return jsonwebtoken_1.default.sign({ id, email }, this.secret, { expiresIn: "1h" });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.secret);
    }
}
exports.default = new JWTService();
//# sourceMappingURL=JWT.service.js.map