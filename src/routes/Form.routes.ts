import { Request, Response, Router } from "express";
import { body, param } from "express-validator";
import {
  deleteForm,
  getForm,
  getForms,
  postForm,
  putForm,
  patchFormReadStatus,
} from "../controllers/Form.controller";
import { validateFields } from "../middlewares/validateFields.mdl";

const router = Router();

router.get("/:dateinItial/:dateFinal", (req: Request, res: Response) =>
  getForms(req, res)
);
router.get(
  "/:id",
  [param("id").isInt().withMessage("ID must be an integer"), validateFields],
  (req: Request, res: Response) => getForm(req, res)
);
router.post(
  "/",
  [
    body("form.subject").notEmpty().withMessage("Subject is required"),
    body("form.full_name").notEmpty().withMessage("Full name is required"),
    body("form.phone").isMobilePhone("any").withMessage("Invalid phone number"),
    body("form.email").isEmail().withMessage("Invalid email"),
    body("form.message").notEmpty().withMessage("Message is required"),
    validateFields,
  ],
  (req: Request, res: Response) => postForm(req, res)
);
router.put(
  "/:id",
  [
    param("id").isInt().withMessage("ID must be an integer"),
    body("form.subject").notEmpty().withMessage("Subject is required"),
    body("form.full_name").notEmpty().withMessage("Full name is required"),
    body("form.phone").isMobilePhone("any").withMessage("Invalid phone number"),
    body("form.email").isEmail().withMessage("Invalid email"),
    body("form.message").notEmpty().withMessage("Message is required"),
    validateFields,
  ],
  (req: Request, res: Response) => putForm(req, res)
);
router.patch(
  "/:id/read",
  [param("id").isInt().withMessage("ID must be an integer"), validateFields],
  (req: Request, res: Response) => patchFormReadStatus(req, res)
);
router.delete(
  "/:id",
  [param("id").isInt().withMessage("ID must be an integer"), validateFields],
  (req: Request, res: Response) => deleteForm(req, res)
);

export default router;
