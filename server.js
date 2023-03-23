"use strict";

const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

require("dotenv").config();


const PORT = process.env.PORT || 5000;  // http://localhost:5000/



const { client, getExerciseForOneUser } = require("./controllers/database-func");
const { getExerciseListByEquipment } = require("./controllers/API-func");
const { handleServerError , handlePageNotFoundError } = require('./controllers/handle-Error-func');




server.get("/", (req, res) => {
  res.send("hello world");
});


/////////////////// API routes //////////////////
server.get("/exerciseByEquipment/:equipment", getExerciseListByEquipment);


////////////////// DATABASE routes ///////////////////
server.get("/exerciseForOneUser/:email", getExerciseForOneUser);


// Add error handling middleware to the server
server.use(handleServerError);
server.use(handlePageNotFoundError);




client.connect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Port ${PORT} is ready.`);
    })
  })
  .catch((err) => {
    handleServerError(error, req, res);
  })
  