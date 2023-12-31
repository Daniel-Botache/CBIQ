import { sequelize } from "./src/db";
import { app } from "./src/app";
import dotenv from "dotenv";
dotenv.config();
// access to PORT from .env file
const PORT_ENV: string | undefined = process.env.PORT;

//Assign 3000 as default value in case PORT_ENV is undefined
const PORT = parseInt(PORT_ENV || "3000", 10);

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    // PORT variable used to access the server
    console.log(`server running on port ${PORT}`);
  });
});
