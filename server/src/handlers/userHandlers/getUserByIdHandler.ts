import { User } from "../../db";

export const getUserByIdHandler = async (id: string) => {
  try {
    const user = await User.findByPk(id);
    if (!user) return undefined;
    return user;
  } catch (error) {
    return undefined;
  }
};
