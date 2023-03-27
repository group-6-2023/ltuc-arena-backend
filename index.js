"use strict";
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {
  client,
  getExerciseForOneUser,
  addExercise,
  addUser,
  deleteExerciseHandler,
  updateExerciseHandler,
  getUsers,
} = require("./controllers/database-func");

const {
  getExerciseListByEquipment,
  getExerciseListByTargetMuscle,
  getAllExercises,
  getExercisesByPart,
  getBodyPartList,
} = require("./controllers/API-func");

const {
  handleServerError,
  handlePageNotFoundError,
} = require("./controllers/handle-Error-func");

const server = express();
const PORT = process.env.PORT || 5000; // http://localhost:5000/

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("hello world");
});

/////////////////// API routes //////////////////
server.get("/exerciseByEquipment/:equipment", getExerciseListByEquipment);
server.get(
  "/exerciseByTargetMuscle/:targetMuscle",
  getExerciseListByTargetMuscle
);
server.get("/allExercises", getAllExercises);
server.get("/allExercisesByBodypart/:bodypart", getExercisesByPart);
server.get("/allBodypart", getBodyPartList);

///////////////// DATABASE routes ///////////////////
server.get("/exerciseForOneUser/:email", getExerciseForOneUser);
server.post("/addExerciseForOneUser/:email", addExercise);
server.get("/allUsers", getUsers);
server.post("/infoForOneUser", addUser);
server.delete("/deleteExercise/:exerciseid", deleteExerciseHandler);
server.put("/updateExercise/:exerciseid", updateExerciseHandler);

///////// error handling middleware to the server//////////////////
server.use(handleServerError);
server.use(handlePageNotFoundError);

client
  .connect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Port ${PORT} is ready.`);
    });
  })
  .catch((error) => {
    handleServerError(error, req, res);
  });
