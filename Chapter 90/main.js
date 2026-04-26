const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const bird = require("./routes/bird");

app.use(express.static("public"));

app.use("/bird", bird);

// middleware 1
app.use((req, res, next) => {
  console.log(req);
  req.harry = "hi i am harry";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});

// middleware 2
app.use((req, res, next) => {
  console.log("logged again");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!" + req.harry);
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
