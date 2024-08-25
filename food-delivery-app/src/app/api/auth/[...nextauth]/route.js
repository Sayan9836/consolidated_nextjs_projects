import { User } from "@/app/models/User";
import mongoose from "mongoose";
import nextAuth from "next-auth";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import clientPromise from "@/libs/mongoConnect";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";

const handler = nextAuth({
  secret: process.env.SECRET,
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const email = credentials?.username;
        const password = credentials?.password;

        mongoose
          .connect(process.env.MONGO_URL)
          .then(() => console.log("database connected"));

        const user = await User.findOne({ email });

        const isPassOk = user && bcrypt.compareSync(password, user.password);

        if (isPassOk) {
          return user;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
