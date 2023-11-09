import { Router } from "express";
import { getSpecialPriceHandler } from "../handlers/getSpecialPriceHandler";

const priceRouter: Router = Router();

priceRouter.get("/:user_id/:nombre_producto", getSpecialPriceHandler);

export default priceRouter;
