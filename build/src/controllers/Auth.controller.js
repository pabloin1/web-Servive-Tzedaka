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
const BCryptEncryption_service_1 = require("../services/BCryptEncryption.service");
const encryptionService = new BCryptEncryption_service_1.BCryptEncryptionService();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, password } = req.body;
    const user = yield User_repository_1.default.findByEmail(email);
    if (user && (yield encryptionService.comparePassword(password, (_a = user.password) !== null && _a !== void 0 ? _a : ""))) {
        const token = JWT_service_1.default.generateToken(user.id, user.email);
        return res.status(200).json({ token });
    }
    else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
});
exports.login = login;
//# sourceMappingURL=Auth.controller.js.map