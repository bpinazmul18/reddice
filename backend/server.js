import express from "express";
import mongodb from "mongodb";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8080;
const dbURL = "mongodb://localhost/reddicedb";
app.use(bodyParser.json());

function validate(data) {
  let errors = {};
  if (data.username === "") errors.username = "Can't be empty";
  if (data.email === "") errors.email = "Can't be empty";
  if (data.password === "") errors.password = "Can't be empty";
  if (data.repeatPassword === "") errors.repeatPassword = "Can't be empty";
  if (data.timezone === "") errors.timezone = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
}

mongodb.MongoClient.connect(dbURL, (err, db) => {
  app.post("/api/users", (req, res) => {
    const { errors, isValid } = validate(req.body);
    console.log(errors);
    console.log(isValid);

    if (isValid) {
      const { username, email, password, repeatPassword, timezone } = req.body;

      console.log("username", username);
      console.log("email", email);
      console.log("password", password);
      console.log("repeatPassword", repeatPassword);
      console.log("timezone", timezone);

      db.collection("users").insert(
        { username, email, password, repeatPassword, timezone },
        (err, result) => {
          if (err) {
            res
              .status(500)
              .json({ errors: { global: "Something went wrong!" } });
          } else {
            res.json({ user: result.ops[0] });
          }
        }
      );
    } else {
      res.status(400).json({ errors });
    }
  });

  app.listen(PORT, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Server is running on the localhost:${PORT}`);
    }
  });
});
