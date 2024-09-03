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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
const Product_repository_1 = __importDefault(require("../repositories/Product.repository"));
const Product_model_1 = __importDefault(require("../models/Product.model"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Product_repository_1.default.listAll();
    let { status, error, message, value } = response;
    let productList = Product_model_1.default.castProductList(value[0]);
    return res.status(status).json({
        status,
        error,
        message,
        value: productList
    });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield Product_repository_1.default.listOne(id);
    let { status, error, message, value } = response;
    const product = (_a = value[0]) !== null && _a !== void 0 ? _a : Product_model_1.default.getStructure();
    if (product.id === 0)
        status = 404;
    return res.status(status).json({
        status,
        error,
        message,
        value: product
    });
});
exports.getProduct = getProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body.product;
    const response = yield Product_repository_1.default.create(product);
    let { status, error, message, value } = response;
    const idProduct = value[0][0].id;
    console.log(idProduct);
    return res.status(status).json({
        status,
        error,
        message,
        value: idProduct
    });
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const product = req.body.product;
    const response = yield Product_repository_1.default.update(id, product);
    let { status, error, message, value } = response;
    const idProduct = value[0][0].id;
    return res.status(status).json({
        status,
        error,
        message,
        value: idProduct
    });
});
exports.putProduct = putProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = yield Product_repository_1.default.deleteProduct(id);
    let { status, error, message, value } = response;
    return res.status(status).json({
        status,
        error,
        message,
    });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=Product.controller.js.map