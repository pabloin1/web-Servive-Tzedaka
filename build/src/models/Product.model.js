"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStructure = () => {
    const product = {
        id: 0,
        amount: 0,
        description: ""
    };
    return product;
};
const castProduct = (data) => {
    const product = {
        id: data.id,
        amount: data.amount,
        description: data.description
    };
    return product;
};
const castProductList = (value) => {
    return value.map((product) => {
        product = ProductModel.castProduct(product);
        return Object.assign({}, product);
    });
};
const ProductModel = {
    castProduct,
    castProductList,
    getStructure
};
exports.default = ProductModel;
//# sourceMappingURL=Product.model.js.map