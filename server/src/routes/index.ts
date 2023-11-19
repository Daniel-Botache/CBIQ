import { Router } from "express";
import { userRouter } from "./userRouter/userRoutes";
//Router Init
const routes = Router();

//Every route configuration
routes.use("/user", userRouter);

export { routes };
