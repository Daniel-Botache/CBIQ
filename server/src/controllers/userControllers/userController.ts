import { User } from "../../db";
import { Request, Response } from "express";
const getAllUSerController = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    return res.status(200).send(users);
  } catch (error) {
    return res(500).json({ error: "Internal server error" });
  }
};

export default getAllUSerController;
