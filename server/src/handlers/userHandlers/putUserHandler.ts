import { User } from "../../db";
import { userDataInterface } from "../../helpers/interfaces";

export const putUserHandler = async (id: string, data: userDataInterface) => {
  try {
    const user = await User.findByPk(id);
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
