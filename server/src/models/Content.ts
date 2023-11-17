import { DataTypes, Sequelize } from "sequelize";

export const Content = (sequelize: Sequelize) => {
  sequelize.define("Content", {
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
