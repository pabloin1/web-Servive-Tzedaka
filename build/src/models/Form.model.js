"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStructure = () => {
    return {
        id: 0,
        subject: "",
        full_name: "",
        phone: "",
        email: "",
        message: "",
        readed: false,
        date: "",
        hour: "",
    };
};
const castForm = (data) => {
    var _a;
    return {
        id: (_a = data.id) !== null && _a !== void 0 ? _a : 0,
        subject: data.subject,
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        readed: Boolean(data.readed),
        date: data.date,
        hour: data.hour,
    };
};
const castFormList = (value) => {
    return value.map((form) => castForm(form));
};
const FormModel = {
    getStructure,
    castForm,
    castFormList,
};
exports.default = FormModel;
//# sourceMappingURL=Form.model.js.map