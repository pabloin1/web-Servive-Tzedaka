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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const MySQL_config_1 = __importDefault(require("../../config/MySQL.config"));
const runMigration = () => __awaiter(void 0, void 0, void 0, function* () {
    const { database } = MySQL_config_1.default, dbConfigWithoutDB = __rest(MySQL_config_1.default, ["database"]);
    const connection = yield (0, promise_1.createPool)(dbConfigWithoutDB);
    try {
        yield connection.execute(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        console.log(`Database '${database}' checked/created successfully.`);
        yield connection.query(`USE \`${database}\`;`);
        yield connection.execute(`
            CREATE TABLE IF NOT EXISTS user (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `);
        // Table Product
        yield connection.execute(`
            CREATE TABLE IF NOT EXISTS product (
                id INT AUTO_INCREMENT PRIMARY KEY,
                amount DECIMAL(10, 2) NOT NULL,
                description TEXT NOT NULL
            );
        `);
        // Table Form
        yield connection.execute(`
            CREATE TABLE IF NOT EXISTS form (
                id INT AUTO_INCREMENT PRIMARY KEY,
                subject VARCHAR(255) NOT NULL,
                full_name VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                readed BOOLEAN NOT NULL DEFAULT false,
                date DATE,
                hour TIME
            );
        `);
        // Table Configuration
        yield connection.execute(`
            CREATE TABLE IF NOT EXISTS configuration (
                id INT AUTO_INCREMENT PRIMARY KEY,
                mission TEXT NOT NULL,
                vision TEXT NOT NULL,
                address VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                timetable VARCHAR(255) NOT NULL
            );
        `);
        console.log('Migration completed successfully.');
    }
    catch (error) {
        console.error('Migration failed:', error);
    }
    finally {
        yield connection.end();
    }
});
runMigration();
//# sourceMappingURL=migration.js.map