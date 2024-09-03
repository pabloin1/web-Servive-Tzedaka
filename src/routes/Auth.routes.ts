import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { login } from "../controllers/Auth.controller";
import { validateFields } from "../middlewares/validateFields.mdl";

const router = Router();

router.post("/login", [
    body('name').notEmpty().withMessage('name is required'),
    body('password').notEmpty().withMessage('Password is required'),
    validateFields
], (req: Request, res: Response) => login(req, res));

export default router;
