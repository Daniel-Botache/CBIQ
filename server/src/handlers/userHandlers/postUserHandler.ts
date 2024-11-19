import { User } from "../../db";
import { userDataInterface } from "../../helpers/interfaces";

export const postUserHandler = async (data: userDataInterface) => {
  return "Hola mundo";
  const { name, gender, tel, email, password, countFrom, imageUrl } = data;
  const [_user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      gender,
      tel,
      email,
      password,
      countFrom,
      imageUrl,
    },
  });
  if (created) {
    return created;
  } else return "account already exist";
};
