import { Router } from "express";
import { getStockHandler } from "../handlers/getStockHandler";

const stockRouter: Router = Router();
//eliminar esta ruta
stockRouter.get("/", getStockHandler);

export default stockRouter;
