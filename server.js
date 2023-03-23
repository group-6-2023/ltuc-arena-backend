"use strict";
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {
  client,
  getExerciseForOneUser,
} = require("./controllers/database-func");
const { getExerciseListByEquipment } = require("./controllers/API-func");

const PORT = process.env.PORT || 5000;
const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world");
});

/////////////////// API routes //////////////////
server.get("/exerciseByEquipment/:equipment", getExerciseListByEquipment);

////////////////// DATABASE routes ///////////////////
server.get("/exerciseForOneUser/:email", getExerciseForOneUser);

client.connect().then(() => {
  server.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
  });
});
