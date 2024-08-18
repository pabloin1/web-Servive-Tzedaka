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
const MySQL_database_1 = __importDefault(require("../database/MySQL.database"));
const BCryptEncryption_service_1 = require("../services/BCryptEncryption.service");
const encryptionService = new BCryptEncryption_service_1.BCryptEncryptionService();
const listAll = () => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = 'CALL GetAllUsers()';
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const listOne = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = `CALL GetUser('${idUser}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `CALL GetUserByEmail('${email}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    const user = response.value[0][0];
    return user ? Object.assign({}, user) : null;
});
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    user.password = yield encryptionService.hashPassword((_a = user.password) !== null && _a !== void 0 ? _a : "");
    const sql = `CALL CreateUser('${user.id}', '${user.email}', '${user.name}', '${user.password}', '${user.token}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const update = (idUser, user) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    user.password = yield encryptionService.hashPassword((_a = user.password) !== null && _a !== void 0 ? _a : "");
    const sql = `CALL CreateUser('${idUser}', '${user.email}', '${user.name}', '${user.password}', '${user.token}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const deleteUser = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = `CALL DeleteUser('${idUser}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const UserRepository = {
    listAll,
    listOne,
    findByEmail,
    create,
    update,
    deleteUser,
};
exports.default = UserRepository;
//# sourceMappingURL=User.repository.js.map