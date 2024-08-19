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
exports.deleteForm = exports.patchFormReadStatus = exports.putForm = exports.postForm = exports.getForm = exports.getForms = void 0;
const Form_repository_1 = __importDefault(require("../repositories/Form.repository"));
const Form_model_1 = __importDefault(require("../models/Form.model"));
const getForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const dateIntial = (_a = req.params.dateIntial) !== null && _a !== void 0 ? _a : "1000-01-01";
    const dateFinal = (_b = req.params.dateFinal) !== null && _b !== void 0 ? _b : "1000-01-01";
    const response = yield Form_repository_1.default.listAll(dateIntial, dateFinal);
    let { status, error, message, value } = response;
    let formList = Form_model_1.default.castFormList(value[0]);
    return res.status(status).json({ status, error, message, value: formList });
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
    return res.status(status).json({ status, error, message, value: form });
});
exports.getForm = getForm;
const postForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const form = req.body.form;
    const response = yield Form_repository_1.default.create(form);
    let { status, error, message, value } = response;
    const idForm = value[0][0].id;
    return res.status(status).json({ status, error, message, value: idForm });
});
exports.postForm = postForm;
const putForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idForm = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const form = req.body.form;
    const response = yield Form_repository_1.default.update(idForm, form);
    let { status, error, message, value } = response;
    return res.status(status).json({ status, error, message, value });
});
exports.putForm = putForm;
const patchFormReadStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const { read } = req.body;
    const response = yield Form_repository_1.default.updateReadStatus(id, read);
    let { status, error, message, value } = response;
    return res.status(status).json({ status, error, message, value });
});
exports.patchFormReadStatus = patchFormReadStatus;
const deleteForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idForm = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield Form_repository_1.default.deleteForm(idForm);
    let { status, error, message } = response;
    return res.status(status).json({ status, error, message });
});
exports.deleteForm = deleteForm;
//# sourceMappingURL=Form.controller.js.map