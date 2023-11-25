import { getAllUSerHandler } from "../../handlers/userHandlers/getAllUsersHandler";
import { Request, Response } from "express";

const getAllUSerController = async (_req: Request, res: Response<any, any>) => {
  try {
    const users = await getAllUSerHandler();
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default getAllUSerController;
