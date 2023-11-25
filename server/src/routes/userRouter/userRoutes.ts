import { Router } from "express";
import getAllUSerController from "../../controllers/userControllers/getAllUserController";
import { postUserController } from "../../controllers/userControllers/postUserController";

//router init
const userRouter = Router();

//Route configuration
userRouter.get("/", getAllUSerController);
userRouter.post("/", postUserController);

export { userRouter };
