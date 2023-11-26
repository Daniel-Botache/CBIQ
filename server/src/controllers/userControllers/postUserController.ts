import { postUserHandler } from "../../handlers/userHandlers/postUserHandler";
import { Request, Response } from "express";

export const postUserController = async (
  req: Request,
  res: Response<any, any>
): Promise<Response> => {
  try {
    const data = req.body;
    const user = await postUserHandler(data);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
