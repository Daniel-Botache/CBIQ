import { Router } from "express";
import { userRouter } from "./userRouter/userRoutes";
import { certificateRouter } from "./certificateRouter/certificateRouter";
import { countryRouter } from "./countryRouter/countryRouter";
import { categoryRouter } from "./categoryRouter/categoryRouter";
import { teacherRouter } from "./teacherRouter/teacherRouter";
import { reviewRouter } from "./reviewRouter/reviewRouter";
//Router Init
const routes = Router();

//Every route configuration
routes.use("/user", userRouter);
routes.use("/certificate", certificateRouter);
routes.use("/country", countryRouter);
routes.use("/category", categoryRouter);
routes.use("/teacher", teacherRouter);
routes.use("/review", reviewRouter);

export { routes };
