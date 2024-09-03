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
exports.putConfiguration = exports.getConfiguration = exports.getConfigurations = void 0;
const Configuration_repository_1 = __importDefault(require("../repositories/Configuration.repository"));
const Configuration_model_1 = __importDefault(require("../models/Configuration.model"));
const getConfigurations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Configuration_repository_1.default.listAll();
    const { status, error, message, value } = response;
    const configurations = Configuration_model_1.default.castConfigurationList(value[0]);
    return res
        .status(status)
        .json({ status, error, message, value: configurations });
});
exports.getConfigurations = getConfigurations;
const getConfiguration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = Number(req.params.id) || 0;
    const response = yield Configuration_repository_1.default.listOne(id);
    let { status, error, message, value } = response;
    const configuration = (_a = value[0]) !== null && _a !== void 0 ? _a : Configuration_model_1.default.getStructure();
    if (configuration.id === 0)
        status = 404;
    return res
        .status(status)
        .json({ status, error, message, value: configuration });
});
exports.getConfiguration = getConfiguration;
const putConfiguration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const configuration = req.body.configuration;
    const response = yield Configuration_repository_1.default.update(configuration);
    let { status, error, message, value } = response;
    const idConfiguration = (_a = value[0]) === null || _a === void 0 ? void 0 : _a.id;
    return res.status(status).json({
        status,
        error,
        message,
        value: configuration,
    });
});
exports.putConfiguration = putConfiguration;
//# sourceMappingURL=Configuration.controller.js.map