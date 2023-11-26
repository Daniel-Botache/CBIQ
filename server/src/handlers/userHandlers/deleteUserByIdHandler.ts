import { User } from "../../db";

export const deleteUserByIdHandler = async (id: string) => {
  try {
    const userDelete = await User.destroy({ where: { id } });
    return userDelete;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};
