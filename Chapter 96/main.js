import mongoose from "mongoose";
import express from "express";
const app = express();
const port = 3000;
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

app.get("/", (req, res) => {
  const todo = new Todo({
    desc: "how are you",
    isDone: false,
    days: Date.now(),
  });
  todo.save();
  res.send("hello world");
  console.log(todo);
});

app.get("/a", async (req, res) => {
  let todo = await Todo.findOne({});
  res.json({ title: todo.title, desc: todo.desc, days: todo.days });
});

app.listen(port, () => {
  console.log(`server is listning on port ${port}`);
});
