"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Form_controller_1 = require("../controllers/Form.controller");
const router = (0, express_1.Router)();
router.get("/:dateinItial/:dateFinal", (req, res) => (0, Form_controller_1.getForms)(req, res));
router.get("/:id", (req, res) => (0, Form_controller_1.getForm)(req, res));
router.post("/", (req, res) => (0, Form_controller_1.postForm)(req, res));
router.put("/:id", (req, res) => (0, Form_controller_1.putForm)(req, res));
router.patch('/:id/read', (req, res) => (0, Form_controller_1.patchFormReadStatus)(req, res));
router.delete("/:id", (req, res) => (0, Form_controller_1.deleteForm)(req, res));
exports.default = router;
//# sourceMappingURL=Form.routes.js.map