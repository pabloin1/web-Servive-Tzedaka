import { Request, Response, Router } from "express";
import { body, param } from "express-validator";
import {
  deleteForm,
  getForm,
  getForms,
  postForm,
  patchFormReadStatus,
} from "../controllers/Form.controller";
import { validateFields } from "../middlewares/validateFields.mdl";
import authenticateToken from "../middlewares/ValidateJWT.mdl";
import validateDateFormat from "../middlewares/validateFormatDate.mdl";

const router = Router();

router.get(
  "/:dateInitial/:dateFinal",
  [authenticateToken, validateDateFormat, validateFields],
  (req: Request, res: Response) => getForms(req, res)
);
router.get(
  "/:id",
  [
    authenticateToken,
    param("id").isInt().withMessage("ID must be an integer"),
    validateFields,
  ],
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
    body("form.date").notEmpty().withMessage("Date is required"),
    body("form.hour").notEmpty().withMessage("Hour is required"),
    validateFields,
  ],
  (req: Request, res: Response) => postForm(req, res)
);



router.patch(
  "/:id/read",
  [
    authenticateToken,
    param("id").isInt().withMessage("ID must be an integer"),
    validateFields,
  ],
  (req: Request, res: Response) => patchFormReadStatus(req, res)
);
router.delete(
  "/:id",
  [
    authenticateToken,
    param("id").isInt().withMessage("ID must be an integer"),
    validateFields,
  ],
  (req: Request, res: Response) => deleteForm(req, res)
);

export default router;
