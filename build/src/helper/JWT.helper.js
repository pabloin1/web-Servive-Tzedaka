"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Config_1 = __importDefault(require("../config/Config"));
class Jwt {
    constructor() {
        this.secret = Config_1.default.jwtSecret;
    }
    generateToken(id, email) {
        return jsonwebtoken_1.default.sign({ id, email }, this.secret, { expiresIn: "8h" });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.secret);
    }
}
exports.Jwt = Jwt;
exports.default = Jwt;
//# sourceMappingURL=JWT.helper.js.map