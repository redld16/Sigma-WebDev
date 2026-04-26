import mongoose from "mongoose";

const ToodSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "hey" },
  desc: String,
  isDone: Boolean,
  days: Number,
});

export const Todo = mongoose.model("Todo", ToodSchema);
