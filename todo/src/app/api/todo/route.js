import mongoose from "mongoose";
import { Todo } from "../../../model/Todo";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URL);
  const { name } = await req.json();

  if (!name) {
    return Response.json({
      status: "error",
      message: "name is required!",
    });
  }

  const todo = await Todo.create({ name });

  return Response.json({
    status: "success",
    todo,
    message: "Todo created successfully ",
  });
}

export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URL);
  const todos = await Todo.find();
  return Response.json({
    status: "success",
    todos,
    message: "Todo fetched successfully ",
  });
}

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URL);
  const { name } = await req.json();
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  const updatedTodo = await Todo.findByIdAndUpdate(_id, {
    $set: {
      name: name,
    },
  });

  return Response.json({
    status: "success",
    updatedTodo,
    message: "Todo udated successfully ",
  });
}

export async function DELETE(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  try {
    await Todo.findByIdAndDelete(_id);
    return Response.status(200).json({
      status: "success",
      message: "Todo deleted successfully ",
    });
  } catch (err) {
    return Response.json({
      status: "error",
      message: "error while deleting todo",
    });
  }
}
