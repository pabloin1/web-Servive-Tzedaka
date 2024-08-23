"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Form_controller_1 = require("../controllers/Form.controller");
const validateFields_mdl_1 = require("../middlewares/validateFields.mdl");
const router = (0, express_1.Router)();
router.get("/:dateinItial/:dateFinal", (req, res) => (0, Form_controller_1.getForms)(req, res));
router.get("/:id", [(0, express_validator_1.param)("id").isInt().withMessage("ID must be an integer"), validateFields_mdl_1.validateFields], (req, res) => (0, Form_controller_1.getForm)(req, res));
router.post("/", [
    (0, express_validator_1.body)("form.subject").notEmpty().withMessage("Subject is required"),
    (0, express_validator_1.body)("form.full_name").notEmpty().withMessage("Full name is required"),
    (0, express_validator_1.body)("form.phone").isMobilePhone("any").withMessage("Invalid phone number"),
    (0, express_validator_1.body)("form.email").isEmail().withMessage("Invalid email"),
    (0, express_validator_1.body)("form.message").notEmpty().withMessage("Message is required"),
    validateFields_mdl_1.validateFields,
], (req, res) => (0, Form_controller_1.postForm)(req, res));
router.put("/:id", [
    (0, express_validator_1.param)("id").isInt().withMessage("ID must be an integer"),
    (0, express_validator_1.body)("form.subject").notEmpty().withMessage("Subject is required"),
    (0, express_validator_1.body)("form.full_name").notEmpty().withMessage("Full name is required"),
    (0, express_validator_1.body)("form.phone").isMobilePhone("any").withMessage("Invalid phone number"),
    (0, express_validator_1.body)("form.email").isEmail().withMessage("Invalid email"),
    (0, express_validator_1.body)("form.message").notEmpty().withMessage("Message is required"),
    validateFields_mdl_1.validateFields,
], (req, res) => (0, Form_controller_1.putForm)(req, res));
router.patch("/:id/read", [(0, express_validator_1.param)("id").isInt().withMessage("ID must be an integer"), validateFields_mdl_1.validateFields], (req, res) => (0, Form_controller_1.patchFormReadStatus)(req, res));
router.delete("/:id", [(0, express_validator_1.param)("id").isInt().withMessage("ID must be an integer"), validateFields_mdl_1.validateFields], (req, res) => (0, Form_controller_1.deleteForm)(req, res));
exports.default = router;
//# sourceMappingURL=Form.routes.js.map