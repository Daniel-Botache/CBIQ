import { Sequelize, DataTypes } from "sequelize";

export const Certificate = (sequelize: Sequelize) => {
  sequelize.define("Certificate", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    dateExp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    intensity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
