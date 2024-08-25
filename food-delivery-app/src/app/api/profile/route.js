import { User } from "@/app/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const { name } = req.body;
  const { email } = getServerSession();

  const user = await User.findOne({ email });

  User.updateOne({ email }, {});
}
