import express from "express";

const app = express();
import "dotenv/config";
import { TransactionModel } from "./models/transaction.js";
import cors from "cors";
import mongoose from "mongoose";

app.use(express.json());
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json("test ok");
});

app.post("/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { price, name, description, dateTime } = req.body;
  const transaction = await TransactionModel.create({
    price,
    name,
    description,
    dateTime,
  });
  res.json(transaction);
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
