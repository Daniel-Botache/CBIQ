import { deleteUserByIdHandler } from "../../handlers/userHandlers/deleteUserByIdHandler";
import { Response, Request } from "express";

export const deleteUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const deleteUser = await deleteUserByIdHandler(id);
    if (deleteUser) {
      return res.status(200).send(deleteUser);
    }
    return res.status(404).send("User not found");
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
