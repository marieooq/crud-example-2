const express = require("express");
const app = express();
const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "crud",
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
