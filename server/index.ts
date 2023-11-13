import express from "express";
import morgan from "morgan";

// access to PORT from .env file
const PORT_ENV: string | undefined = process.env.PORT;

const app = express();
app.use(express.json);
app.use(morgan("dev"));

//Asigna 3000 como valor por defecto en caso de que PORT_ENV sea undefined
const PORT = parseInt(PORT_ENV || "3000", 10);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
