import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";

const DB_BASE: string | undefined = process.env.DB_BASE;
const DB_USER: string | undefined = process.env.DB_USER;
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
const DB_HOST: string | undefined = process.env.DB_HOST;

//New instance of sequalize with de .env data
if (DB_BASE && DB_USER && DB_HOST && DB_PASSWORD) {
  const sequelize = new Sequelize(DB_BASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
  });
} else {
  throw new Error("Missing database connection details");
}
