import mongoose from "mongoose";
import { MONGO_URI } from "./constant";

export const connectionDB =  mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Error Occurred on Db connection"+err);
  });
