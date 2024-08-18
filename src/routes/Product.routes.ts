import { Request, Response, Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controllers/Product.controller";


const router = Router();

router.get("/", (req: Request, res: Response) => getProducts(req, res));
router.get("/:id", (req: Request, res: Response) => getProduct(req, res));
router.post("/", (req: Request, res: Response) => postProduct(req, res));
router.put("/:id",(req: Request, res: Response) => putProduct(req, res))
router.delete('/:id',(req:Request, res:Response)=> deleteProduct(req,res))

export default router;