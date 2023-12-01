import { Router } from "express";
import GetController from "../../controllers/getAllDefaultController";
import DeleteController from "../../controllers/deleteDafaultController";
import GetByIdController from "../../controllers/getByIdDefaultController";
import PutController from "../../controllers/putDefaultController";
import { sequelize } from "../../db";

//router init
const universityRouter = Router();

//Instances for Controller Classes
const universityController = new GetController(sequelize.models.Univesity);
const universityDeleteController = new DeleteController(
  sequelize.models.Univesity
);
const universityGetByIdController = new GetByIdController(
  sequelize.models.Univesity
);
const universityPutController = new PutController(sequelize.models.Univesity);

//Route configuration
universityRouter.get(
  "/",
  universityController.getAll.bind(universityController)
);
universityRouter.delete(
  "/:id",
  universityDeleteController.delete.bind(universityDeleteController)
);
universityRouter.put(
  "/:id",
  universityPutController.put.bind(universityPutController)
);
universityRouter.get(
  "/",
  universityGetByIdController.getById.bind(universityGetByIdController)
);
