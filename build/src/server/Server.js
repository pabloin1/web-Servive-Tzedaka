"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../config/Config"));
const server = {
    isProduction: true,
    PORT: Config_1.default.PORT,
};
exports.default = server;
//# sourceMappingURL=Server.js.map