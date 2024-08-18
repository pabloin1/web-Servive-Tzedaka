import { Request, Response, Router } from "express";
import { getConfigurations, getConfiguration } from "../controllers/Configuration.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => getConfigurations(req, res));
router.get("/:id", (req: Request, res: Response) => getConfiguration(req, res));

export default router;