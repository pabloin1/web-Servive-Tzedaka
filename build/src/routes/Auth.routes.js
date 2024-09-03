"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Auth_controller_1 = require("../controllers/Auth.controller");
const validateFields_mdl_1 = require("../middlewares/validateFields.mdl");
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.body)('name').notEmpty().withMessage('name is required'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required'),
    validateFields_mdl_1.validateFields
], (req, res) => (0, Auth_controller_1.login)(req, res));
exports.default = router;
//# sourceMappingURL=Auth.routes.js.map