"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
const express_validator_1 = require("express-validator");
const validateFields = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 400,
            error: true,
            message: "Validation error",
            value: errors.array(),
        });
    }
    next();
};
exports.validateFields = validateFields;
//# sourceMappingURL=validateFields.mdl.js.map