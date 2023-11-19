import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { PORT } from "./config/constant.js";
import { connectionDB } from "./config/db.js";
import bookRouter from './controllers/book-controller.js'

const app = express();
app.use(express.json());
connectionDB;

app.use('/api',bookRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
