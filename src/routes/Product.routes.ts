import { Request, Response, Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controllers/Product.controller";
import { body } from "express-validator";
import { validateFields } from "../middlewares/validateFields.mdl";

const router = Router();

router.get("/", (req: Request, res: Response) => getProducts(req, res));

router.get("/:id", (req: Request, res: Response) => getProduct(req, res));

router.post(
  "/",
  [
    body('product.amount','Amount must be a number').isNumeric(),
    body('product.description','Description is required').notEmpty(),
    body('product.amount','amount is required').notEmpty(),
    validateFields
  ],
  (req: Request, res: Response) => postProduct(req, res)
);

router.put(
  '/:id',
  [
    body('product.amount','Amount must be a number').isNumeric(),
    body('product.description','Description is required').notEmpty(),
    body('product.amount','amount is required').notEmpty(),
    validateFields
  ],
  (req: Request, res: Response) => putProduct(req, res)
);

router.delete('/:id', (req: Request, res: Response) => deleteProduct(req, res));

export default router;
