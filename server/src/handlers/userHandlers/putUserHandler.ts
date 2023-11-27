import { userDataInterface } from "../../helpers/interfaces";
import { getUserByIdHandler } from "./getUserByIdHandler";

export const putUserHandler = async (id: string, data: userDataInterface) => {
  try {
    const user = await getUserByIdHandler(id);
    if (!user) {
      return false;
    }
    await user.update(data);
    return true;
  } catch (error) {
    console.log(error);
    return "Error trying to modify the user";
  }
};
