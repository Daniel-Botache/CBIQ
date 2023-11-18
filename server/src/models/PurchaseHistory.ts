import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  return sequelize.define("PurchaseHistory", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
    },
    method: { type: DataTypes.STRING, allowNull: true },
    total: { type: DataTypes.FLOAT, allowNull: false },
    numberItems: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.ENUM("completed", "cancelled", "pending") },
  });
};
