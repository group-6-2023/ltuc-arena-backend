DROP TABLE IF EXISTS userExercise;

CREATE TABLE IF NOT EXISTS userExercise (
    exerciseid SERIAL PRIMARY KEY,
    userid VARCHAR(10000),
    exerciseName VARCHAR(255),
    gifUrl VARCHAR(10000),
    bodyPart VARCHAR(10000),
    targetMuscle VARCHAR(10000),
    equipment VARCHAR(10000)
  );