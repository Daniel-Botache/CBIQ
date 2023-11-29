import { ModelDefined } from "sequelize";
import { Request, Response } from "express";

class GetController {
  private model: ModelDefined<any, any>;

  constructor(model: ModelDefined<any, any>) {
    this.model = model;
  }

  async getAll(_req: Request, res: Response) {
    try {
      const data = await this.model.findAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default GetController;
