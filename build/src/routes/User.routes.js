"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../controllers/User.controller");
const router = (0, express_1.Router)();
router.get("/", (req, res) => (0, User_controller_1.getUsers)(req, res));
router.get("/:id", (req, res) => (0, User_controller_1.getUser)(req, res));
router.post("/", (req, res) => (0, User_controller_1.postUser)(req, res));
router.put('/:id', (req, res) => (0, User_controller_1.putUser)(req, res));
router.delete('/:id', (req, res) => (0, User_controller_1.deleteUser)(req, res));
exports.default = router;
//# sourceMappingURL=User.routes.js.map