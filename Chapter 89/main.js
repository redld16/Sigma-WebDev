const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog.js");
const shop = require("./routes/shop.js");

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop", shop);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/", (req, res) => {
  res.send("hello world! post");
});

app.get("/index", (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname });
});
app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3 });
});

app.listen(port, () => {
  console.log(`app is listining or port ${port}`);
});
