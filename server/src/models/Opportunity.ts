import { DataTypes, Sequelize } from "sequelize";

export const Opportunity = (sequelize: Sequelize) => {
  sequelize.define("Opportunity", {
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
