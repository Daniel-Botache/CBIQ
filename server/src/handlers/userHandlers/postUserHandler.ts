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
  const user = await User.findOrCreate;
};
