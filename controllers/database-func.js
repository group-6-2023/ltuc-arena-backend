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

module.exports = { client, getExerciseForOneUser };
