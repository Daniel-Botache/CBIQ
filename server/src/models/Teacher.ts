import { DataTypes, Sequelize } from "sequelize";

export const Teacher = (sequelize: Sequelize) => {
  sequelize.define("Teacher", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
  });
};
