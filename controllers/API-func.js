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

const getAllExercises = (req, res) => {

  try {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    axios.request(options).then((response) => {
      console.log(response.data);
      const data = response.data
      res.send(data)
    })
  } catch (error) {
    handleServerError(error, req, res);
  }
};

const getExercisesByPart = (req, res) => {
  try {


    const bodypart = req.params.bodyPart;

    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then((response) => {
        const data = response.data
        res.send(data)

      })



  } catch (error) {
    handleServerError(error, req, res);
  }
};



module.exports = {
  getExerciseListByEquipment,
  getExerciseListByTargetMuscle,
  getAllExercises, getExercisesByPart
};

