const express = require("express");
const createTable = require("./modules");
const userRouter = require("./modules/user/routes/user.routes");

const app = express();
// middleware to parse bodies  from requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the API" });
});
// single module
//// see what is all models was created in all modules  and export them as a single module.
createTable();

//  routes ('/endpoints')
app.use(userRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
