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
exports.deleteForm = exports.patchFormReadStatus = exports.postForm = exports.getForm = exports.getForms = void 0;
const Form_repository_1 = __importDefault(require("../repositories/Form.repository"));
const Form_model_1 = __importDefault(require("../models/Form.model"));
const getForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const dateInitial = (_a = req.params.dateInitial) !== null && _a !== void 0 ? _a : "1000-01-01";
    const dateFinal = (_b = req.params.dateFinal) !== null && _b !== void 0 ? _b : "1000-01-01";
    const response = yield Form_repository_1.default.listAll(dateInitial, dateFinal);
    let { status, error, message, value } = response;
    let resApi;
    if (status === 500 && error === true)
        resApi = { status, error, message, value: [] };
    if (value[0])
        resApi = { status: 500, error: true, message: "Error", value: [] };
    let formList = Form_model_1.default.castFormList(value[0]);
    resApi = { status, error, message, value: formList };
    return res.status(status).json(resApi);
});
exports.getForms = getForms;
const getForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield Form_repository_1.default.listOne(id);
    let { status, error, message, value } = response;
    const form = (_a = value[0]) !== null && _a !== void 0 ? _a : Form_model_1.default.getStructure();
    if (form.id === 0)
        status = 404;
    if (status === 500)
        return res
            .status(status)
            .json({ status, error, message: "error", value: {} });
    return res.status(status).json({ status, error, message, value: form });
});
exports.getForm = getForm;
const postForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const form = req.body.form;
    const response = yield Form_repository_1.default.create(form);
    let { status, error, message, value } = response;
    if (status === 500 && error === true)
        return res.status(status).json({ status, error, message: "error", value });
    const idForm = value[0][0].id;
    return res.status(status).json({ status, error, message, value: idForm });
});
exports.postForm = postForm;
const patchFormReadStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield Form_repository_1.default.updateReadStatus(id);
    let { status, error, message, value } = response;
    if (status === 500 && error === true)
        return res.status(status).json({ status, error, message: "error", value });
    const idForm = value[0][0].id;
    return res.status(status).json({ status, error, message, value: idForm });
});
exports.patchFormReadStatus = patchFormReadStatus;
const deleteForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield Form_repository_1.default.deleteForm(id);
    let { status, error, message, value } = response;
    if (status === 500 && error === true)
        return res.status(status).json({ status, error, message: "error", value });
    return res.status(status).json({ status, error, message, value: id });
});
exports.deleteForm = deleteForm;
//# sourceMappingURL=Form.controller.js.map