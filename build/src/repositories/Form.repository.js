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
const listAll = (dateinItial, dateFinal) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `CALL GetAllForms( '${dateinItial}', '${dateFinal}' )`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const listOne = (idForm) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `CALL GetForm(${idForm})`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const create = (form) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `CALL CreateForm(0,'${form.subject}', '${form.full_name}', '${form.phone}', '${form.email}', '${form.message}', ${form.readed})`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const update = (idForm, form) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `CALL CreateForm(${idForm}, '${form.subject}', '${form.full_name}', '${form.phone}', '${form.email}', '${form.message}', ${form.readed})`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const deleteForm = (idForm) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `CALL DeleteForm(${idForm})`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const updateReadStatus = (idForm, read) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `CALL UpdateFormReadStatus(${idForm}, ${read ? 1 : 0})`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const FormRepository = {
    listAll,
    listOne,
    create,
    update,
    updateReadStatus,
    deleteForm,
};
exports.default = FormRepository;
//# sourceMappingURL=Form.repository.js.map