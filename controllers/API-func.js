const axios = require("axios");
const { handleServerError } = require('./handle-Error-func');


const getExerciseListByEquipment = (req, res) => {
  try {
    const equipment = req.params.equipment;
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
      const data = response.data;
      res.send(data);
    });
  } catch (error) {
    handleServerError(error, req, res);
  }
};


const getExerciseListByTargetMuscle = (req, res) => {
  try {
    const targetMuscle = req.params.targetMuscle;
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/target/${targetMuscle}`,
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
      const data = response.data;
      res.send(data);
    });
  } catch (error) {
    handleServerError(error, req, res);
  }
};







module.exports = {
  getExerciseListByEquipment,
  getExerciseListByTargetMuscle,
};

