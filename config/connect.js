const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("connected to db");
  return mongoose.connect(url);
};

module.exports = connectDB;
