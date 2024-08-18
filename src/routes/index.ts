import userRouter from "./User.routes";
import productRouter from "./Product.routes";
import formRouter from "./Form.routes";
import configurationRouter from "../routes/Configuration.routes";
import authRouter  from "../routes/Auth.routes"

export default [
  { path: "/API/users", router: userRouter },
  { path: "/API/products", router: productRouter },
  { path: "/API/forms", router: formRouter },
  { path: "/API/configuration", router: configurationRouter },
  { path: "/API/auth", router: authRouter },
];
