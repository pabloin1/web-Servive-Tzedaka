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
exports.SHA256EncryptionService = void 0;
const crypto_1 = __importDefault(require("crypto"));
class SHA256EncryptionService {
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return crypto_1.default.createHash('sha256').update(password).digest('hex');
        });
    }
    comparePassword(password, hashedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedInput = yield this.hashPassword(password);
            return hashedInput === hashedPassword;
        });
    }
}
exports.SHA256EncryptionService = SHA256EncryptionService;
//# sourceMappingURL=CryptoEncription.service.js.map