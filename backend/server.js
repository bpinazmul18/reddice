import express from "express";
import mongodb from "mongodb";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8080;
const dbURL = "mongodb://localhost/reddicedb";
app.use(bodyParser.json());

mongodb.MongoClient.connect(dbURL, (err, db) => {
  app.post("/api/users", (req, res) => {
    console.log(req.body);
  });

  app.listen(PORT, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Server is running on the localhost:${PORT}`);
    }
  });
});
