import { Router } from "express";
import getAllUSerController from "../../controllers/userControllers/getAllUserController";
import { postUserController } from "../../controllers/userControllers/postUserController";
import { deleteUserByIdController } from "../../controllers/userControllers/deleteUserByIdController";

//router init
const userRouter = Router();

//Route configuration
userRouter.get("/", getAllUSerController);
userRouter.post("/", postUserController);
userRouter.delete("/:id", deleteUserByIdController);

export { userRouter };
