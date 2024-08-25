import { User } from "@/app/models/User";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return Response.json({
      status: "error",
      statusCode: 404,
      message: "email and password both are required",
    });
  }

  await mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => console.log("database connected"))
    .catch((err) => console.log("Unable to connect to the database", err));

  const existed = await User.findOne({ email });

  if (existed) {
    return Response.json({
      status: "error",
      statusCode: 400,
      message: "User already exists Login to continue!",
    });
  }

  const newUser = await User.create({ email, password });

  return Response.json(newUser);
}
