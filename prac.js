const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log(req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
