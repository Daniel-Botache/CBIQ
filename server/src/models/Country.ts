import { DataTypes, Sequelize } from "sequelize";

export const User = (sequelize: Sequelize) => {
  sequelize.define("Country", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryCode: { type: DataTypes.INTEGER },
  });
};
