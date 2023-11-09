import express from "express";

const port = 3000;

//Initializations
const app = express();
app.listen(port, () => {
  console.log(`Server   is running on port ${port}`);
});
module.exports = app;
