import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";

//Data base details connection from .env
const DB_BASE: string | undefined = process.env.DB_BASE;
const DB_USER: string | undefined = process.env.DB_USER;
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
const DB_HOST: string | undefined = process.env.DB_HOST;

//New instance of sequalize if .env data exist
if (DB_BASE && DB_USER && DB_HOST && DB_PASSWORD) {
  const sequelize = new Sequelize(DB_BASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    logging: false,
    native: false,
  });
} else {
  throw new Error("Missing database connection details");
}

const basename: string = path.basename(__filename);
const modelDefiners: string[] = [];
