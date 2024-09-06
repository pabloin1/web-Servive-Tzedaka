"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStructure = () => {
    const user = {
        id: 0,
        email: "",
        name: "",
        password: "",
        token: ""
    };
    return user;
};
const castUser = (data) => {
    var _a, _b;
    const user = {
        id: data.id,
        email: data.email,
        name: data.name,
        password: (_a = data.password) !== null && _a !== void 0 ? _a : undefined,
        token: (_b = data.token) !== null && _b !== void 0 ? _b : undefined
    };
    return user;
};
const castUserList = (value) => {
    return value.map((user) => {
        user = UserModel.castUser(user);
        return Object.assign({}, user);
    });
};
const UserModel = {
    castUser,
    castUserList,
    getStructure
};
exports.default = UserModel;
//# sourceMappingURL=User.model.js.map