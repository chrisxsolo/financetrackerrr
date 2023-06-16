const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());



app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
