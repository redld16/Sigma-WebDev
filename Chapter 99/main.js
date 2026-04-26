const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Employee = require("./model/Employee.js");

mongoose.connect("mongodb://127.0.0.1:27017/company");
app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  //clear the collection
  await Employee.deleteMany({});

  //generate random data

  let randomNames = ["rohan", "rahul", "rajesh", "ravi"];
  let randomLangs = ["python", "java", "C++", "js"];
  let randomCities = ["delhi", "mumbai", "chennai", "kolkata"];

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000) + 12000,
      language: getRandom(randomLangs),
      city: getRandom(randomCities),
      isManger: Math.random() > 0.5 ? true : false,
    });
    // (await e).save();
    console.log(e);
  }
  res.render("index", { foo: "FOO" });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
