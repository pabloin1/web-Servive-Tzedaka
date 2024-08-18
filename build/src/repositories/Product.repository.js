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
const listAll = () => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = `CALL GetAllProducts();`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    console.log(response);
    return response;
});
const listOne = (idProduct) => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = `CALL GetProduct('${idProduct}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const create = (product) => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = `CALL CreateProduct('${product.id}', '${product.amount}','${product.description}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const update = (idProduct, product) => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = `CALL CreateProduct('${idProduct}', '${product.amount}','${product.description}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const deleteProduct = (idProduct) => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se va poner el codigo para la consulta sql
    const sql = `CALL DeleteProduct('${idProduct}')`;
    const response = yield MySQL_database_1.default.executeQuery(sql);
    return response;
});
const ProductRepository = {
    listAll,
    listOne,
    create,
    update,
    deleteProduct,
};
exports.default = ProductRepository;
//# sourceMappingURL=Product.repository.js.map