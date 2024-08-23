"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const User_controller_1 = require("../controllers/User.controller");
const validateFields_mdl_1 = require("../middlewares/validateFields.mdl");
const ValidateJWT_mdl_1 = __importDefault(require("../middlewares/ValidateJWT.mdl"));
const router = (0, express_1.Router)();
router.get("/", [ValidateJWT_mdl_1.default, validateFields_mdl_1.validateFields], (req, res) => (0, User_controller_1.getUsers)(req, res));
router.get("/:id", [(0, express_validator_1.param)('id').isInt().withMessage('ID must be an integer'), validateFields_mdl_1.validateFields], (req, res) => (0, User_controller_1.getUser)(req, res));
router.post("/", [
    (0, express_validator_1.body)('user.email').isEmail().withMessage('Invalid email'),
    (0, express_validator_1.body)('user.name').notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('user.password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validateFields_mdl_1.validateFields
], (req, res) => (0, User_controller_1.postUser)(req, res));
router.put("/:id", [
    (0, express_validator_1.param)('id').isInt().withMessage('ID must be an integer'),
    (0, express_validator_1.body)('user.email').isEmail().withMessage('Invalid email'),
    (0, express_validator_1.body)('user.name').notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('user.password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validateFields_mdl_1.validateFields
], (req, res) => (0, User_controller_1.putUser)(req, res));
router.patch('/:id/password', [validateFields_mdl_1.validateFields], User_controller_1.updateUserPassword);
router.delete("/:id", [
    (0, express_validator_1.param)('id').isInt().withMessage('ID must be an integer'),
    validateFields_mdl_1.validateFields
], (req, res) => (0, User_controller_1.deleteUser)(req, res));
exports.default = router;
//# sourceMappingURL=User.routes.js.map