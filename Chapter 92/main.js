const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "adidas";
  let searchText = "search now";
  let arr = [1, 455, 456];
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "adidis why and where";
  let blogContent = "it's very good brand for shoes";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`app is listining on port ${port}`);
});
