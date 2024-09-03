"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isProduction = true;
const configDev = {
    dbHost: "localhost",
    dbUser: "root",
    dbPassword: "2004",
    dbName: "tzedaka",
    jwtSecret: "defaultsecret",
    PORT: "3001",
};
const configProduction = {
    dbHost: "127.0.0.1",
    dbUser: "tzedvhtd_root",
    dbPassword: ",wSW+D9D4sE_",
    dbName: "tzedvhtd_db_tzedaka_web_site_v2",
    jwtSecret: "tzedvhtd_db_tzedaka_web_site_v2",
    PORT: "3001",
};
let config;
exports.default = config = isProduction ? configProduction : configDev;
//# sourceMappingURL=Config.js.map