import { Router } from "express";

//router init
const countryRouter = Router();

//Route configuration
countryRouter.get("/");

export { countryRouter };
