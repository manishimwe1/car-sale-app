import Credentials from "@auth/core/providers/credentials";
import { useMutation, useQuery } from "convex/react";
import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google";
import { compare } from "bcryptjs";
import { api, internal } from "../convex/_generated/api";
import { httpAction } from "../convex/_generated/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!email || !password) {
          throw new CredentialsSignin("please provide email and password");
        }
        console.log("email", email);

        const response = await fetch(
          `https://famous-chihuahua-933.convex.site/getMessagesByAuthor?email=${email}`
        );
        const user = await response.json();

        console.log(user, "existing user");

        if (!user)
          throw new CredentialsSignin({ cause: "Invalid email and password" });
        if (!user.password)
          throw new CredentialsSignin({ cause: "Invalid password" });

        const isMatched = await compare(password, user.password);

        if (!isMatched) throw new Error("Invalid  password did not match");

        const userData = {
          firstName: user.firstname,
          lastName: user.lastname,
          email: user.email,
          role: user.role,
          id: user._id,
        };
        console.log(user);
        return userData;
      },
    }),
  ],
});
