"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_controller_1 = require("../controllers/Auth.controller");
const router = (0, express_1.Router)();
router.post("/login", (req, res) => (0, Auth_controller_1.login)(req, res));
exports.default = router;
//# sourceMappingURL=Auth.routes.js.map