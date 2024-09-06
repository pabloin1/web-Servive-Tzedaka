"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateDateFormat = (req, res, next) => {
    var _a, _b;
    const dateInitial = (_a = req.params.dateInitial) !== null && _a !== void 0 ? _a : "1000-01-01";
    const dateFinal = (_b = req.params.dateFinal) !== null && _b !== void 0 ? _b : "1000-01-01";
    // Regex para validar formato de fecha YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateInitial || !dateFinal || !dateRegex.test(dateInitial) || !dateRegex.test(dateFinal)) {
        return res.status(400).json({
            message: 'Invalid date format. The correct format is YYYY-MM-DD.'
        });
    }
    next();
};
exports.default = validateDateFormat;
//# sourceMappingURL=validateFormatDate.mdl.js.map