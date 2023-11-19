import { Router } from "express";
import { userRouter } from "./userRouter/userRoutes";
import { certificateRouter } from "./certificateRouter/certificateRouter";
import { countryRouter } from "./countryRouter/countryRouter";
//Router Init
const routes = Router();

//Every route configuration
routes.use("/user", userRouter);
routes.use("/certificate", certificateRouter);
routes.use("/country", countryRouter);
export { routes };
