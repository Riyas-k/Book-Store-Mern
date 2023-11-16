import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { PORT } from "./config/constant.js";
import { connectionDB } from "./config/db.js";

const app = express();
connectionDB()

app.get("/", (req, res) => {
  res.status(200).send("working");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
