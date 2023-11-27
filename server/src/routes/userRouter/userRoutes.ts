import { Router } from "express";
import getAllUSerController from "../../controllers/userControllers/getAllUserController";
import { postUserController } from "../../controllers/userControllers/postUserController";
import { deleteUserByIdController } from "../../controllers/userControllers/deleteUserByIdController";
import putUSerController from "../../controllers/userControllers/putUserController";

//router init
const userRouter = Router();

//Route configuration
userRouter.get("/", getAllUSerController);
userRouter.post("/", postUserController);
userRouter.delete("/:id", deleteUserByIdController);
userRouter.put("/:id", putUSerController);

export { userRouter };
