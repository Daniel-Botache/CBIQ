import { putUserHandler } from "../../handlers/userHandlers/putUserHandler";
import { Request, Response } from "express";

const putUSerController = async (
  req: Request,
  res: Response<any, any>
): Promise<Response> => {
  try {
    const data = req.body;
    const { id } = req.params;
    const userUpdated = await putUserHandler(id, data);
    if (!userUpdated) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send("User modified");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default putUSerController;
