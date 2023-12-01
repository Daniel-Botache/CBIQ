import { ModelDefined } from "sequelize";
import { Request, Response } from "express";

class PutController {
  private model: ModelDefined<any, any>;
  constructor(model: ModelDefined<any, any>) {
    this.model = model;
  }
  async put(req: Request, res: Response) {
    try {
      const dataRequest = req.body;
      const { id } = req.params;
      const data = await this.model.findByPk(id);
      data ? data.update(dataRequest) : res.status(404).send("Data not Found");
      return res.status(200).send("Data modified");
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal server error");
    }
  }
}

export default PutController;
