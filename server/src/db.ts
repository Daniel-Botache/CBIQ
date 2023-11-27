import { ModelDefined, Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
require("dotenv").config();

//Data base details connection from .env
const DB_BASE: string | undefined = process.env.DB_BASE;
const DB_USER: string | undefined = process.env.DB_USER;
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
const DB_HOST: string | undefined = process.env.DB_HOST;
let sequelize: Sequelize;
//New instance of sequalize if .env data exist
if (DB_BASE && DB_USER && DB_HOST && DB_PASSWORD) {
  sequelize = new Sequelize(DB_BASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    logging: false,
    native: false,
  });
  //take the route of this file
  const basename: string = path.basename(__filename);
  const modelDefiners: ((sequelize: Sequelize) => ModelDefined<any, any>)[] =
    [];

  //filter and take all models from dir "models" with fs module
  fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    )
    .forEach((file) => {
      modelDefiners.push(
        require(path.join(__dirname, "/models", file)).default
      );
    });
  //define Models
  modelDefiners.forEach((model) => model(sequelize));
} else {
  throw new Error("Missing database connection details");
}

//call models for describe relations
const {
  User,
  Country,
  Certificate,
  Category,
  University,
  Teacher,
  Review,
  Objective,
  Content,
  Opportunity,
  Course,
  PurchaseHistory,
} = sequelize.models;

//relations
//country-User
User.belongsTo(Country, { foreignKey: "countryId" });
Country.hasMany(User, { foreignKey: "countryId" });

//User-Certificate
Certificate.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Certificate, { foreignKey: "userId" });

//Certificate-Course
Certificate.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Certificate, { foreignKey: "courseId" });

//User-Review
Review.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Review, { foreignKey: "userId" });

//Course-Review
Review.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Review, { foreignKey: "courseId" });

//PurchaseHistory-User
PurchaseHistory.belongsTo(User, { foreignKey: "userId" });
User.hasMany(PurchaseHistory, { foreignKey: "userId" });

//PurchaseHistory-Course
PurchaseHistory.belongsToMany(Course, { through: "coursePurchase" });
Course.belongsToMany(PurchaseHistory, { through: "coursePurchase" });

//User-Course
User.belongsToMany(Course, { through: "students" });
Course.belongsToMany(User, { through: "students" });

//Teacher-University
Teacher.belongsTo(University, { foreignKey: "universityId" });
University.hasMany(Teacher, { foreignKey: "universityId" });

//Teacher-Course
Course.belongsTo(Teacher, { foreignKey: "teacherId" });
Teacher.hasMany(Course, { foreignKey: "teacherId" });

//Category-Course
Category.belongsToMany(Course, { through: "categoryCourses" });
Course.belongsToMany(Category, { through: "categoryCourses" });

export {
  sequelize,
  User,
  Country,
  Certificate,
  Category,
  University,
  Teacher,
  Review,
  Objective,
  Content,
  Opportunity,
  Course,
  PurchaseHistory,
};
