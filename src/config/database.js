require("dotenv").config();
import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const mongoURI = process.env.MongoURI;

exports.connect = () => {
  mongoose
    .connect(
      `mongodb+srv://${dbUser}:${dbPassword}${mongoURI}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.log(error);
      process.exit(1);
    });
};
