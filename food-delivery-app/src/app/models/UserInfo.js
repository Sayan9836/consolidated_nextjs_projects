import { model, models, Schema } from "mongoose";

const userInfoSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const UserInfo = models?.userInfo || model("UserInfo", userInfoSchema);
