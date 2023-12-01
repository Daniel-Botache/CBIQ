import { Router } from "express";
import { postUserController } from "../../controllers/userControllers/postUserController";
import GetController from "../../controllers/getAllDefaultController";
import DeleteController from "../../controllers/deleteDafaultController";
import GetByIdController from "../../controllers/getByIdDefaultController";
import PutController from "../../controllers/putDefaultController";
import { sequelize } from "../../db";
//router init
const userRouter = Router();

//Instances for Controller Classes
const userController = new GetController(sequelize.models.User);
const userDeleteController = new DeleteController(sequelize.models.User);
const userGetByIdController = new GetByIdController(sequelize.models.User);
const userPutController = new PutController(sequelize.models.User);

//Route configuration
userRouter.get("/", userController.getAll.bind(userController));
userRouter.post("/", postUserController);
userRouter.delete(
  "/:id",
  userDeleteController.delete.bind(userDeleteController)
);
userRouter.put("/:id", userPutController.put.bind(userPutController));
userRouter.get(
  "/:id",
  userGetByIdController.getById.bind(userGetByIdController)
);

export { userRouter };
