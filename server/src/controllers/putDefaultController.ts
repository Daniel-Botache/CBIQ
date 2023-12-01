import { ModelDefined } from "sequelize";
import { Request, Response } from "express";

class putController {
  private model: ModelDefined<any, any>;
  constructor(model: ModelDefined<any, any>) {
    this.model = model;
  }
  async put(req: Request, res: Response) {
    try {
      const data = req.body;
      const { id } = req.params;
    } catch (error) {}
  }
}
