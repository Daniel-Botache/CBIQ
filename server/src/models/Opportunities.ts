import { DataTypes, Sequelize } from "sequelize";

export const Opportunities = (sequelize: Sequelize) => {
  sequelize.define("Opportunities", {
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
