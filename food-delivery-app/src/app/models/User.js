import mongoose, { model, models } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass.length || pass.length < 5) {
          new Error("password must be at least 5 characters");
          return false;
        }
      },
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.post("validate", function (user) {
  if (!user.isModified("password")) {
    return user;
  }

  try {
    const genSalt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, genSalt);
  } catch (error) {
    console.log("Error hashing password:", error);
  }
});

export const User = models?.User || model("User", userSchema);
