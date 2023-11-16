import { DataTypes, Sequelize } from "sequelize";

export const User = (sequelize: Sequelize) => {
  sequelize.define("Country", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryCode: { type: DataTypes.INTEGER },
  });
};
