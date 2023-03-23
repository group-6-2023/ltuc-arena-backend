const pg = require("pg");
const { handleServerError } = require('./handle-Error-func');


const client = new pg.Client(process.env.DATABASE_URL);

const getExerciseForOneUser = (req, res) => {
  const userName = req.params.userName;

  const sql = `SELECT * FROM users WHERE userName=${userName}`;
  client
    .query(sql)
    .then((data) => {
      const sql = `SELECT *
      FROM userExercise
      INNER JOIN users
      ON userExercise.userid = ${data.rows.userid};`;
      client
        .query(sql)
        .then((data) => {
          res.send(data.rows);
        })
        .catch((err) => {
          console.log(err.message);
        });
    })
    .catch((error) => {
      handleServerError(error, req, res);
    });
};

module.exports = { client, getExerciseForOneUser };
