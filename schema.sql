DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    userid SERIAL PRIMARY KEY,
    userName VARCHAR(255),
    profilePic VARCHAR(10000),
    email VARCHAR(10000)
  );