const express = require("express");

const app = express();
const Transaction = require("./models/transaction");
const mongoose = require("mongoose");

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json("test ok");
});

app.post("/transaction", (req, res) => {
  console.log(process.env.MONGO_URL);
  mongoose.connect("");
  const { name, description, datetime } = req.body;
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
