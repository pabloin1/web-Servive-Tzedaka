import { Request, Response, Router } from "express";
import {
  getConfigurations,
  getConfiguration,
  putConfiguration,
} from "../controllers/Configuration.controller";
import { validateFields } from "../middlewares/validateFields.mdl";
import authenticateToken from "../middlewares/ValidateJWT.mdl";
import { body } from "express-validator";

const router = Router();

router.get("/", [validateFields], (req: Request, res: Response) =>
  getConfigurations(req, res)
);
router.get("/:id", [validateFields], (req: Request, res: Response) =>
  getConfiguration(req, res)
);
router.put(
    "/",
    [

        body('configuration.mission').isString().notEmpty().withMessage('Mission is required'),
        body('configuration.vision').isString().notEmpty().withMessage('Vision is required'),
        body('configuration.address').isString().notEmpty().withMessage('Address is required'),
        body('configuration.email').isEmail().withMessage('Invalid email format'),
        body('configuration.phone').isString().notEmpty().withMessage('Phone is required'),
        body('configuration.timetable').isString().notEmpty().withMessage('Timetable is required'),
        body('configuration.about_us').isString().notEmpty().withMessage('About Us is required'),
        body('configuration.url_googlemap').isURL().withMessage('URL Google Map is required and must be a valid URL'),
        validateFields 
    ],
    (req: Request, res: Response) => putConfiguration(req, res)
);

export default router;
