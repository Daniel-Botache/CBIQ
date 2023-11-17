import { DataTypes, Sequelize } from "sequelize";

export const Objective = (sequelize: Sequelize) => {
  sequelize.define("Objective", {
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
