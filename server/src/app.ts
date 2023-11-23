import morgan from "morgan";
import { routes } from "./routes";
import express from "express";

const app = express();
app.use(express.json);
app.use(morgan("dev"));
app.use("/", routes);

export { app };
