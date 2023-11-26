import { User } from "../../db";
import { userDataInterface } from "../../helpers/interfaces";

export const putUserHandler = async (id: string, data: userDataInterface) => {
  const { name, gender, tel, password, imageUrl } = data;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.gender = gender;
      user.tel = tel;
      user.password = password;
      user.imageUrl = imageUrl;
      await user.save();
      return "Modification completed";
    }
  } catch (error) {
    return "Error trying to modify the user";
  }
};
