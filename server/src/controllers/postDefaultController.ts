import { ModelDefined } from "sequelize";
import { Request, Response } from "express";

class PostController {
  private model: ModelDefined<any, any>;
  constructor(model: ModelDefined<any, any>) {
    this.model = model;
  }
  async post(req: Request, res: Response) {
    try {
      const dataRequest = req.body.data;
      const data = await this.model.create(dataRequest);
    } catch (error) {}
  }
}

export default PostController;
