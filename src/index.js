import dotenv from "dotenv";
import connectDB from "./db/index.js";

// require("dotenv").config({ path: "./.env" });
dotenv.config({ path: "./.env" });

connectDB();





















/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

*/
