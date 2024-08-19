"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../controllers/User.controller");
const validateFields_mdl_1 = require("../middlewares/validateFields.mdl");
const ValidateJWT_mdl_1 = __importDefault(require("../middlewares/ValidateJWT.mdl"));
const router = (0, express_1.Router)();
router.get("/", [ValidateJWT_mdl_1.default, validateFields_mdl_1.validateFields], (req, res) => (0, User_controller_1.getUsers)(req, res));
router.get("/:id", (req, res) => (0, User_controller_1.getUser)(req, res));
router.post("/", (req, res) => (0, User_controller_1.postUser)(req, res));
router.put('/:id', (req, res) => (0, User_controller_1.putUser)(req, res));
router.delete('/:id', (req, res) => (0, User_controller_1.deleteUser)(req, res));
exports.default = router;
//# sourceMappingURL=User.routes.js.map