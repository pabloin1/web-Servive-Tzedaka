"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_controller_1 = require("../controllers/Product.controller");
const express_validator_1 = require("express-validator");
const validateFields_mdl_1 = require("../middlewares/validateFields.mdl");
const ValidateJWT_mdl_1 = __importDefault(require("../middlewares/ValidateJWT.mdl"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => (0, Product_controller_1.getProducts)(req, res));
router.get("/:id", [validateFields_mdl_1.validateFields], (req, res) => (0, Product_controller_1.getProduct)(req, res));
router.post("/", [
    ValidateJWT_mdl_1.default,
    (0, express_validator_1.body)('product.amount', 'Amount must be a number').isNumeric(),
    (0, express_validator_1.body)('product.description', 'Description is required').notEmpty(),
    (0, express_validator_1.body)('product.amount', 'amount is required').notEmpty(),
    validateFields_mdl_1.validateFields
], (req, res) => (0, Product_controller_1.postProduct)(req, res));
router.put('/:id', [
    ValidateJWT_mdl_1.default,
    (0, express_validator_1.body)('product.amount', 'Amount must be a number').isNumeric(),
    (0, express_validator_1.body)('product.description', 'Description is required').notEmpty(),
    (0, express_validator_1.body)('product.amount', 'amount is required').notEmpty(),
    validateFields_mdl_1.validateFields
], (req, res) => (0, Product_controller_1.putProduct)(req, res));
router.delete('/:id', [ValidateJWT_mdl_1.default, validateFields_mdl_1.validateFields], (req, res) => (0, Product_controller_1.deleteProduct)(req, res));
exports.default = router;
//# sourceMappingURL=Product.routes.js.map