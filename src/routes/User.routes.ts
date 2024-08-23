import { Request, Response, Router } from "express";
import { body, param } from "express-validator";
import { deleteUser, getUser, getUsers, postUser, putUser, updateUserPassword } from "../controllers/User.controller";
import { validateFields } from "../middlewares/validateFields.mdl";
import authenticateToken from "../middlewares/ValidateJWT.mdl";

const router = Router();

router.get("/", [authenticateToken, validateFields], (req: Request, res: Response) => getUsers(req, res));
router.get("/:id", [param('id').isInt().withMessage('ID must be an integer'), validateFields], (req: Request, res: Response) => getUser(req, res));
router.post("/", [
    body('user.email').isEmail().withMessage('Invalid email'),
    body('user.name').notEmpty().withMessage('Name is required'),
    body('user.password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validateFields
], (req: Request, res: Response) => postUser(req, res));

router.put("/:id", [
    param('id').isInt().withMessage('ID must be an integer'),
    body('user.email').isEmail().withMessage('Invalid email'),
    body('user.name').notEmpty().withMessage('Name is required'),
    body('user.password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validateFields
], (req: Request, res: Response) => putUser(req, res));

router.patch('/:id/password',[validateFields], updateUserPassword)

router.delete("/:id", [
    param('id').isInt().withMessage('ID must be an integer'),
    validateFields
], (req: Request, res: Response) => deleteUser(req, res));

export default router;
