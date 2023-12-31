import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  return sequelize.define("Teacher", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: { type: DataTypes.STRING, allowNull: false },
    fotoURL: { type: DataTypes.STRING, allowNull: false },
  });
};
