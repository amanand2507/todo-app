
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/db.js");
const userRouter = require("./route/user.js");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRouter);

// db init
connectToDb();

module.exports = app;


app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
