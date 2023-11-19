import mongoose from "mongoose";
import { MONGO_URI } from "./constant.js";

export const connectionDB = await mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Error Occurred on Db connection" + err);
  });
