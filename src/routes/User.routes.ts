import { Request, Response, Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser, updateUserPassword } from "../controllers/User.controller";
import { validateFields } from "../middlewares/validateFields.mdl";
import authenticateToken from "../middlewares/ValidateJWT.mdl";

const router = Router();

router.get("/", [authenticateToken, validateFields], (req: Request, res: Response) => getUsers(req, res));
router.get("/:id", (req: Request, res: Response) => getUser(req, res));
router.post("/", (req: Request, res: Response) => postUser(req, res));
router.put('/:id', (req: Request, res: Response) => putUser(req, res)); // Actualizar datos del usuario sin la contraseña
router.patch('/:id/password', (req: Request, res: Response) => updateUserPassword(req, res)); // Actualizar solo la contraseña del usuario
router.delete('/:id', (req: Request, res: Response) => deleteUser(req, res));

export default router;
