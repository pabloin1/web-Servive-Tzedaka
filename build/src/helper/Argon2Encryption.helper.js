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
exports.Argon2Encryption = void 0;
const argon2_1 = __importDefault(require("argon2"));
class Argon2Encryption {
    constructor() {
        this.options = {
            type: argon2_1.default.argon2id,
            memoryCost: 2 ** 16,
            timeCost: 3,
            parallelism: 1,
        };
        this.options;
    }
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return argon2_1.default.hash(password, this.options);
        });
    }
    comparePassword(password, hashedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield argon2_1.default.verify(hashedPassword, password);
            }
            catch (err) {
                return false;
            }
        });
    }
}
exports.Argon2Encryption = Argon2Encryption;
//# sourceMappingURL=Argon2Encryption.helper.js.map