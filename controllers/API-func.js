

const axios = require("axios");

const getAllExercises= (req, res) => {

    try {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': '46f6d7e551msh90f9b611d8c4048p12e502jsn99a94aea856c',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {
            console.log(response.data);
            const data = response.data
            res.send(data)
        })
    } catch (error) {
        console.error(error);
    }
};

  


const getExercisesByPart =  (req, res) => {
    try {


        const bodypart = req.params.bodyPart;

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
            headers: {
                'X-RapidAPI-Key': '1da0e2a338msh35e39fa6b141db7p18cf26jsnf57ff582e33e',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then((response) => {
                const data = response.data
                res.send(data)

            })



    } catch (error) {
        console.log(error);
    }
};


module.exports = { getAllExercises, getExercisesByPart} 