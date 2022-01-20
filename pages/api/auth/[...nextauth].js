import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// project imports
import { SECRET } from "../../../config";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  secret: SECRET,
  session: {
    jwt: {
      // Seconds - How long until an idle session expires and is no longer valid.
      maxAge: 24 * 60 * 60, // 1 day
    },
  },
  providers: [
    CredentialsProvider({
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = await client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Invalid password!");
        }

        client.close();
        return { email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
