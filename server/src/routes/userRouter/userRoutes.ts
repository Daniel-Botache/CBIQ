import { Router } from "express";
import getAllUSerController from "../../controllers/userControllers/userController";

//router init
const userRouter = Router();

//Route configuration
userRouter.get("/", getAllUSerController);

export { userRouter };
