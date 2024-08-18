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
    };
};
const castForm = (data) => {
    return {
        id: data.id,
        subject: data.subject,
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        readed: Boolean(data.readed),
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