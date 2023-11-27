import { getUserByIdHandler } from "../../handlers/userHandlers/getUserByIdHandler";
import { Response, Request } from "express";

export const getUserByIdController = async (
  req: Request,
  res: Response<any, any>
): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await getUserByIdHandler(id);
    if (!user) {
      return res.status(404).send("User not dfound");
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};
