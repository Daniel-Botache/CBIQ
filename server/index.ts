import express from "express";
import morgan from "morgan";
import sequelize from "./src/db";
import { routes } from "./src/routes";

// access to PORT from .env file
const PORT_ENV: string | undefined = process.env.PORT;

const app = express();
app.use(express.json);
app.use(morgan("dev"));

//Assign 3000 as default value in case PORT_ENV is undefined
const PORT = parseInt(PORT_ENV || "3000", 10);

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    // PORT variable used to access the server
    console.log(`server running on port ${PORT}`);
  });
});

//Routes init
app.use("/", routes);
