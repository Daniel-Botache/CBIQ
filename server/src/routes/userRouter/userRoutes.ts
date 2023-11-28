import { Router } from "express";
//import getAllUSerController from "../../controllers/userControllers/getAllUserController";
import { postUserController } from "../../controllers/userControllers/postUserController";
import { deleteUserByIdController } from "../../controllers/userControllers/deleteUserByIdController";
import putUSerController from "../../controllers/userControllers/putUserController";
import { getUserByIdController } from "../../controllers/userControllers/getUserByIdController";
import CRUDController from "../../controllers/getAllDefaultController";
import { sequelize } from "../../db";
//router init
const userRouter = Router();

const userController = new CRUDController(sequelize.models.User);

//Route configuration
userRouter.get("/", userController.getAll.bind(userController));
userRouter.post("/", postUserController);
userRouter.delete("/:id", deleteUserByIdController);
userRouter.put("/:id", putUSerController);
userRouter.get("/:id", getUserByIdController);

export { userRouter };
