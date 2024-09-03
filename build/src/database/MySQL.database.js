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
const promise_1 = require("mysql2/promise");
const MySQL_config_1 = __importDefault(require("../config/MySQL.config"));
const executeQuery = (sql) => __awaiter(void 0, void 0, void 0, function* () {
    const dbConfig = MySQL_config_1.default;
    const connection = yield (0, promise_1.createPool)(dbConfig);
    let data;
    try {
        const response = yield connection.query(sql);
        data = {
            status: 200,
            error: false,
            message: "Successfully executed query",
            value: response[0]
        };
    }
    catch (error) {
        console.error({ error });
        data = {
            status: 500,
            error: true,
            message: error.code ? `MySQL Error: ${error.code} - ${error.message}` : "Internal Server Error",
            value: {}
        };
    }
    yield connection.end();
    return data;
});
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT @@VERSION AS version;";
    const response = yield executeQuery(sql);
    if (!response.error) {
        const version = response.value[0].version;
        console.error(`Connected to MySQL ${version}`);
    }
    else {
        console.error(`Failed to connect to MySQL: ${response.message}`);
    }
});
const MySQl = {
    executeQuery,
    connection
};
exports.default = MySQl;
//# sourceMappingURL=MySQL.database.js.map