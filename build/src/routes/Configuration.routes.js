"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Configuration_controller_1 = require("../controllers/Configuration.controller");
const validateFields_mdl_1 = require("../middlewares/validateFields.mdl");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get("/", [validateFields_mdl_1.validateFields], (req, res) => (0, Configuration_controller_1.getConfigurations)(req, res));
router.get("/:id", [validateFields_mdl_1.validateFields], (req, res) => (0, Configuration_controller_1.getConfiguration)(req, res));
router.put("/", [
    (0, express_validator_1.body)('configuration.mission').isString().notEmpty().withMessage('Mission is required'),
    (0, express_validator_1.body)('configuration.vision').isString().notEmpty().withMessage('Vision is required'),
    (0, express_validator_1.body)('configuration.address').isString().notEmpty().withMessage('Address is required'),
    (0, express_validator_1.body)('configuration.email').isEmail().withMessage('Invalid email format'),
    (0, express_validator_1.body)('configuration.phone').isString().notEmpty().withMessage('Phone is required'),
    (0, express_validator_1.body)('configuration.timetable').isString().notEmpty().withMessage('Timetable is required'),
    (0, express_validator_1.body)('configuration.about_us').isString().notEmpty().withMessage('About Us is required'),
    (0, express_validator_1.body)('configuration.url_googlemap').isURL().withMessage('URL Google Map is required and must be a valid URL'),
    validateFields_mdl_1.validateFields
], (req, res) => (0, Configuration_controller_1.putConfiguration)(req, res));
exports.default = router;
//# sourceMappingURL=Configuration.routes.js.map