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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const User_repository_1 = __importDefault(require("../repositories/User.repository"));
const User_model_1 = __importDefault(require("../models/User.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield User_repository_1.default.listAll();
    let { status, error, message, value } = response;
    let userList = User_model_1.default.castUserList(value[0]);
    return res.status(status).json({
        status,
        error,
        message,
        value: userList
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield User_repository_1.default.listOne(id);
    let { status, error, message, value } = response;
    const user = (_a = value[0]) !== null && _a !== void 0 ? _a : User_model_1.default.getStructure();
    if (user.id === 0)
        status = 404;
    return res.status(200).json({
        status,
        error,
        message,
        value: user
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body.user;
    const response = yield User_repository_1.default.create(user);
    let { status, error, message, value } = response;
    const idUser = value[0][0].id;
    return res.status(status).json({
        status,
        error,
        message,
        value: idUser
    });
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const user = req.body.user;
    const response = yield User_repository_1.default.update(idUser, user);
    let { status, error, message, value } = response;
    return res.status(status).json({
        status,
        error,
        message,
        value
    });
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield User_repository_1.default.deleteUser(idUser);
    let { status, error, message, value } = response;
    return res.status(status).json({
        status,
        error,
        message,
        value: idUser
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=User.controller.js.map