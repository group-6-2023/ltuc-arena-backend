"use strict";
const express = require("express");
const cors = require("cors");
const pg = require("pg");
const { default: axios } = require("axios");
require("dotenv").config();
const server = express();
const PORT = process.env.PORT || 5000;
const client = new pg.Client(process.env.DATABASE_URL);
const {getAllExercises , getExercisesByPart} = require("./controllers/API-func")



server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world");
});

server.get("/allExercises", getAllExercises);
server.get("/allExercisesByBodypart/:bodypart", getExercisesByPart)



client.connect().then(() => {
  server.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
  });
});
