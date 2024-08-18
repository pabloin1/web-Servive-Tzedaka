"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_controller_1 = require("../controllers/Product.controller");
const router = (0, express_1.Router)();
router.get("/", (req, res) => (0, Product_controller_1.getProducts)(req, res));
router.get("/:id", (req, res) => (0, Product_controller_1.getProduct)(req, res));
router.post("/", (req, res) => (0, Product_controller_1.postProduct)(req, res));
router.put("/:id", (req, res) => (0, Product_controller_1.putProduct)(req, res));
router.delete('/:id', (req, res) => (0, Product_controller_1.deleteProduct)(req, res));
exports.default = router;
//# sourceMappingURL=Product.routes.js.map