"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const User_repository_1 = __importDefault(require("../repositories/User.repository"));
const JWT_helper_1 = __importDefault(require("../helper/JWT.helper"));
const Argon2Encryption_helper_1 = require("../helper/Argon2Encryption.helper");
const encryption = new Argon2Encryption_helper_1.Argon2Encryption();
const jwt = new JWT_helper_1.default();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    const user = yield User_repository_1.default.findByEmail(name);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = yield encryption.comparePassword(password, user.password);
    if (isPasswordValid) {
        const token = jwt.generateToken(user.id, user.email);
        return res.status(200).json({ value: token });
    }
    return res.status(401).json({ message: "Invalid credentials" });
});
exports.login = login;
//# sourceMappingURL=Auth.controller.js.map