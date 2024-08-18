"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Configuration_controller_1 = require("../controllers/Configuration.controller");
const router = (0, express_1.Router)();
router.get("/", (req, res) => (0, Configuration_controller_1.getConfigurations)(req, res));
router.get("/:id", (req, res) => (0, Configuration_controller_1.getConfiguration)(req, res));
exports.default = router;
//# sourceMappingURL=Configuration.routes.js.map