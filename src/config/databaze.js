const { default: mongoose } = require("mongoose");
const config = require(".");

const connectDB = async () => {
  try {
    await mongoose.connect(config.databaseURL);
    console.log("Database is connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

module.exports = connectDB;
