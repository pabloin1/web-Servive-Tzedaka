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
const JWT_service_1 = __importDefault(require("../services/JWT.service"));
const Argon2Encryption_service_1 = require("../services/Argon2Encryption.service");
const encryptionService = new Argon2Encryption_service_1.Argon2EncryptionService();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_repository_1.default.findByEmail(email);
    console.log(user);
    console.log(user === null || user === void 0 ? void 0 : user.password);
    const pass = yield encryptionService.hashPassword(password);
    if (user) {
        const isPasswordValid = yield encryptionService.comparePassword(password, pass);
        console.log(isPasswordValid);
        if (isPasswordValid) {
            const token = JWT_service_1.default.generateToken(user.id, user.email);
            return res.status(200).json({ token });
        }
    }
    return res.status(401).json({ message: "Invalid credentials" });
});
exports.login = login;
//# sourceMappingURL=Auth.controller.js.map