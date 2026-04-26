const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// types of requests are app.get(path,handler) , app.post() ,app.put() and app.delete()
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello about us");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact");
});

app.get("/blogs", (req, res) => {
  res.send("Hello blogs");
});

app.get("/blogs/:slug", (req, res) => {
  console.log(req);
  console.log(req.params);
  console.log(req.query);
  res.send(`Hello ${req.params.slug}`);
});

// app.get("/blogs/intro-to-js", (req, res) => {
//   res.send("Hello intro to js");
// });

// app.get("/blogs/intro-to-python", (req, res) => {
//   res.send("Hello intro to python");
// });

app.listen(port, () => {
  console.log(`server is litining on port ${port}`);
});
