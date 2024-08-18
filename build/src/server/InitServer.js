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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Server_1 = __importDefault(require("./Server"));
const routes_1 = __importDefault(require("../routes"));
const MySQL_database_1 = __importDefault(require("../database/MySQL.database"));
class Server {
    constructor() {
        this.port = Server_1.default.PORT;
        this.app = (0, express_1.default)();
        this.port;
        //definir las rutas
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                MySQL_database_1.default.connection();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error(String(error));
                }
            }
        });
    }
    middlewares() {
        this.app.use(body_parser_1.default.json({ limit: "1024mb" }));
        this.app.use(body_parser_1.default.urlencoded({ extended: true, limit: "1024mb" }));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        routes_1.default.forEach((routes) => {
            this.app.use(routes.path, routes.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Running in port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=InitServer.js.map