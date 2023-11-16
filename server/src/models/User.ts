import { DataTypes, Sequelize } from "sequelize";

export const User = (sequelize: Sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("masculino", "femenino", "otro"),
      allowNull: true,
    },
    tel: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, Infinity],
          msg: "La contraseña deve ser mínimo de 8 caracteres",
        },
      },
    },
  });
};
