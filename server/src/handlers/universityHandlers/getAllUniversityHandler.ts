import { University } from "../../db";

export const getALluniversityHandler = async () => {
  try {
    const universities = await University.findAll();
    return universities;
  } catch (error) {
    throw new Error("Error catching universities");
  }
};
