import { User } from "../../db";

export const getAllUSerHandler = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Error catching Users");
  }
};
