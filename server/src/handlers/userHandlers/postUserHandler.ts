import { User } from "../../db";

interface data {
  name: string;
  gender: string;
  tel: string;
  email: string;
  password: string;
  countFrom: string;
  imageUrl: string;
}

export const postUserHandler = async (data: data) => {
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
