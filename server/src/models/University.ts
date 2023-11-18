import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  return sequelize.define("University", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logoURL: { type: DataTypes.STRING, allowNull: false },
    URL: { type: DataTypes.STRING, allowNull: true },
  });
};
