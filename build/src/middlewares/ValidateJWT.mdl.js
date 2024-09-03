"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JWT_helper_1 = __importDefault(require("../helper/JWT.helper"));
const jwt = new JWT_helper_1.default();
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(req.headers);
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }
    try {
        const user = jwt.verifyToken(token);
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};
exports.default = authenticateToken;
//# sourceMappingURL=ValidateJWT.mdl.js.map