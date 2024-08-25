import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Todo = models?.Todo || model("Todo", todoSchema);
