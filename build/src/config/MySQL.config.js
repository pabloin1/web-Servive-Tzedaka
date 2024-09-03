"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("../server/Server"));
const Config_1 = __importDefault(require("./Config"));
const createCredentials = (host, database, user, password) => ({
    host,
    database,
    user,
    password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const credentialsMySQLLocal = createCredentials(Config_1.default.dbHost, Config_1.default.dbName, Config_1.default.dbUser, Config_1.default.dbPassword);
const credentialsMySQLHosting = createCredentials(Config_1.default.dbHost, Config_1.default.dbName, Config_1.default.dbUser, Config_1.default.dbPassword);
const credentialsMySQL = Server_1.default.isProduction ? credentialsMySQLHosting : credentialsMySQLLocal;
exports.default = credentialsMySQL;
//# sourceMappingURL=MySQL.config.js.map