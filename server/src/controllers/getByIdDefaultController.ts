import { Request, Response } from "express";
import { ModelDefined } from "sequelize";

class getByIdController {
  private model: ModelDefined<any, any>;
  constructor(model: ModelDefined<any, any>) {
    this.model = model;
  }
  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.model.findByPk(id);
      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).send("Data not found");
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal server error");
    }
  }
}

export default getByIdController;
