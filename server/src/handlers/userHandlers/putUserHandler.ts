import { User } from "../../db";
import { userDataInterface } from "../../helpers/interfaces";

export const putUserHandler = async (id: string, data: userDataInterface) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return "User not found";
    }
    await user.update(data);
    return "User modified";
  } catch (error) {
    return "Error trying to modify the user";
  }
};
