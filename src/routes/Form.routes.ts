import { Request, Response, Router } from "express";
import { deleteForm, getForm, getForms, postForm, putForm,patchFormReadStatus } from "../controllers/Form.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => getForms(req, res));
router.get("/:id", (req: Request, res: Response) => getForm(req, res));
router.post("/", (req: Request, res: Response) => postForm(req, res));
router.put("/:id", (req: Request, res: Response) => putForm(req, res));
router.patch('/:id/read', (req: Request, res: Response) => patchFormReadStatus(req, res));
router.delete("/:id", (req: Request, res: Response) => deleteForm(req, res));

export default router;
