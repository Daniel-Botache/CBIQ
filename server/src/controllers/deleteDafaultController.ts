import { ModelDefined } from "sequelize";
import { Request, Response } from "express";

class DeleteController {
  private model: ModelDefined<any, any>;

  constructor(model: ModelDefined<any, any>) {
    this.model = model;
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params;
      const data = await this.model.destroy({ where: { id } });
      if (data) {
        return res.status(200).json({ data });
      }

      return res.status(400).send("Data not found");
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default DeleteController;
