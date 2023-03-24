const pg = require("pg");
const { handleServerError } = require('./handle-Error-func');
const client = new pg.Client(process.env.DATABASE_URL);


const getExerciseForOneUser = (req, res) => {
  const email = req.params.email;

  const sql = `SELECT * FROM users WHERE email='${email}';`;
  client
    .query(sql)
    .then((data) => {
      const user = data.rows[0];
      const sql = `SELECT * FROM userExercise WHERE userid='${user.userid}'`;
      client.query(sql).then((data) => {
        res.send(data.rows);
      });
    })
    .catch((error) => {
      handleServerError(error, req, res);
    });
};


const addExercise = (req, res) => {
  const email = req.params.email;
  const exercise = req.body;
  const sql = `SELECT * FROM users WHERE email='${email}';`;


  client
    .query(sql)
    .then((data) => {
      const user = data.rows[0];
      const sql = `INSERT INTO userExercise (userid, exerciseName, gifUrl, bodyPart, targetMuscle, equipment)
      VALUES('${user.userid}','${exercise.exerciseName}' ,'${exercise.gifUrl}' ,'${exercise.bodyPart}','${exercise.targetMuscle}' , ${exercise.equipment});`


      client.query(sql).then((data) => {
        res.send(data.rows);
      });
    })
    .catch((error) => {
      handleServerError(error, req, res);
    });
};

const addInfo = (req, res) => {
  const info = req.body;
  const sql = `INSERT INTO users (userName, profilePic, email)
      VALUES('${info.userName}','${info.profilePic}' ,'${info.email}');`

  client
    .query(sql)
    .then((data) => {
      //const user = data.rows[0];
      res.send("added su");
    })
    .catch((error) => {
      handleServerError(error, req, res);
    });
};



module.exports = {
  client,
  getExerciseForOneUser,
  addExercise,
  addInfo,
};
