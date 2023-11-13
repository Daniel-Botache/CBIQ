import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";

const DB_USER: string | undefined = process.env.DB_USER;
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
const DB_HOST: string | undefined = process.env.DB_HOST;

//New instance of sequalize with de .env data
const sequelize = new Sequelize(``);
