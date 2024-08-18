"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (id = '') => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        const secretOrPrivateKey = process.env.SECRETORPRIVATEKEY;
        if (!secretOrPrivateKey) {
            return reject('Secret or private key is not defined');
        }
        jsonwebtoken_1.default.sign(payload, secretOrPrivateKey, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            else {
                resolve(token || '');
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=GenerateJwt.js.map