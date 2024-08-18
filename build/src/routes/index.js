"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_routes_1 = __importDefault(require("./User.routes"));
const Product_routes_1 = __importDefault(require("./Product.routes"));
const Form_routes_1 = __importDefault(require("./Form.routes"));
const Configuration_routes_1 = __importDefault(require("../routes/Configuration.routes"));
const Auth_routes_1 = __importDefault(require("../routes/Auth.routes"));
exports.default = [
    { path: "/API/users", router: User_routes_1.default },
    { path: "/API/products", router: Product_routes_1.default },
    { path: "/API/forms", router: Form_routes_1.default },
    { path: "/API/configuration", router: Configuration_routes_1.default },
    { path: "/API/auth", router: Auth_routes_1.default },
];
//# sourceMappingURL=index.js.map