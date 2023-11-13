import express from "express";
import morgan from "morgan";

// access to PORT from .env file
const PORT_ENV: string | undefined = process.env.PORT;

const app = express();
app.use(express.json);
app.use(morgan("dev"));

//Assign 3000 as default value in case PORT_ENV is undefined
const PORT = parseInt(PORT_ENV || "3000", 10);

// PORT variable used to access the server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
