import { Router } from "express";
import { userRouter } from "./userRouter/userRoutes";
import { certificateRouter } from "./certificateRouter/certificateRouter";
import { countryRouter } from "./countryRouter/countryRouter";
import { categoryRouter } from "./categoryRouter/categoryRouter";
import { teacherRouter } from "./teacherRouter/teacherRouter";
import { reviewRouter } from "./reviewRouter/reviewRouter";
import { loginRouter } from "./loginRouter/loginRouter";
import { courseRouter } from "./courseRouter/courseRouter";
//Router Init
const routes = Router();

//Every route configuration
routes.use("/user", userRouter);
routes.use("/certificate", certificateRouter);
routes.use("/country", countryRouter);
routes.use("/category", categoryRouter);
routes.use("/teacher", teacherRouter);
routes.use("/review", reviewRouter);
routes.use("/course", courseRouter);
routes.use("/login", loginRouter);

export { routes };
