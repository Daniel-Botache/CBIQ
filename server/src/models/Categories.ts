import { DataTypes, Sequelize } from "sequelize";

export const Categories = (sequelize: Sequelize) => {
  sequelize.define("Categories", {
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
