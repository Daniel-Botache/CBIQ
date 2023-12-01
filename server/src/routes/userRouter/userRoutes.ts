import { Router } from "express";
import { postUserController } from "../../controllers/userControllers/postUserController";
import putUSerController from "../../controllers/userControllers/putUserController";
import GetController from "../../controllers/getAllDefaultController";
import DeleteController from "../../controllers/deleteDafaultController";
import GetByIdController from "../../controllers/getByIdDefaultController";
import { sequelize } from "../../db";
//router init
const userRouter = Router();

const userController = new GetController(sequelize.models.User);
const userDeleteController = new DeleteController(sequelize.models.User);
const userGetByIdController = new GetByIdController(sequelize.models.User);

//Route configuration
userRouter.get("/", userController.getAll.bind(userController));
userRouter.post("/", postUserController);
userRouter.delete(
  "/:id",
  userDeleteController.delete.bind(userDeleteController)
);
userRouter.put("/:id", putUSerController);
userRouter.get(
  "/:id",
  userGetByIdController.getById.bind(userGetByIdController)
);

export { userRouter };
