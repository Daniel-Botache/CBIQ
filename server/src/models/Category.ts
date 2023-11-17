import { DataTypes, Sequelize } from "sequelize";

export const Category = (sequelize: Sequelize) => {
  sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
