import { User } from "../../db";
import { Request, Response } from "express";

const getAllUSerController = async (_req: Request, res: Response<any, any>) => {
  try {
    const users = await User.findAll();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default getAllUSerController;
