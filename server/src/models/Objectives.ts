import { DataTypes, Sequelize } from "sequelize";

export const Objectives = (sequelize: Sequelize) => {
  sequelize.define("Objectives", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
