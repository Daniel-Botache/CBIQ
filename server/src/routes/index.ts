import { Router } from "express";
import stockRouter from "./stockRouter";
import priceRouter from "./priceRouter";

const router: Router = Router();

router.use("/products", stockRouter);
router.use("/price", priceRouter);

export default router;
