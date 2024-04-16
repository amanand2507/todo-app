const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`db connected successfully`);
    })
    .catch((e) => {
      console.log(`error in connected to db ${e.message}`);
    });
};

module.exports = connectToDb;
