"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("../server/Server"));
const createCredentials = (host, database, user, password) => ({
    host,
    database,
    user,
    password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const credentialsMySQLLocal = createCredentials('127.0.0.1', 'tzedaka1', 'root', '2004');
const credentialsMySQLHosting = createCredentials('127.0.0.1', 'sinevrok_db_orve', 'sinevrok_user_orve', 'orve.password');
const credentialsMySQL = Server_1.default.isProduction ? credentialsMySQLHosting : credentialsMySQLLocal;
exports.default = credentialsMySQL;
//# sourceMappingURL=MySQL.config.js.map