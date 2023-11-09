import { Router } from "express";
import { getStockHandler } from "../handlers/getStockHandler";

const stockRouter: Router = Router();

stockRouter.get("/", getStockHandler);

export default stockRouter;
