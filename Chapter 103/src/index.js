const express = require("express");
const app = express();
require("dotenv").config();
console.log(process.env);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
