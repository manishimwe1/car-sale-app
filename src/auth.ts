// auth.ts
import Credentials from "@auth/core/providers/credentials";
import { compare } from "bcryptjs";
import Google from "next-auth/providers/google";
import NextAuth, { CredentialsSignin } from "next-auth";
import { DefaultSession } from "@auth/core/types";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "select_account", // To avoid repeated consent screen
          access_type: "offline",
        },
      },
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const email = credentials?.email;
          const password = credentials?.password as string;

          if (!email || !password) {
            throw new CredentialsSignin("Please provide email and password");
          }

          const response = await fetch(
            `https://famous-chihuahua-933.convex.site/getMessagesByAuthor?email=${email}`,
            { cache: "no-store" }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }

          const user = await response.json();

          if (!user) {
            throw new CredentialsSignin("Invalid email and password");
          }
          if (!user.password) {
            throw new CredentialsSignin("Invalid password");
          }

          const isMatched = await compare(password, user.password);
          if (!isMatched) {
            throw new CredentialsSignin("Invalid password");
          }

          return {
            id: user._id,
            firstName: user.firstname,
            lastName: user.lastname,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
    newUser: "/register", // Add this if you have a registration page
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: token.role as string,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async signIn({ user, account }) {
      try {
        if (account?.provider === "google") {
          const { email, name, image } = user;

          if (!email) {
            return false;
          }

          const response = await fetch(
            `https://famous-chihuahua-933.convex.site/getMessagesByAuthor?email=${email}`,
            { cache: "no-store" }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }

          const existingUser = await response.json();

          if (!existingUser) {
            const createResponse = await fetch(
              `https://famous-chihuahua-933.convex.site/createUser`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  firstname: name,
                  role: "user",
                  image,
                }),
              }
            );

            if (!createResponse.ok) {
              throw new Error("Failed to create user");
            }
          }
          return true;
        }

        return Boolean(account?.provider === "credentials");
      } catch (error) {
        console.error("Sign in error:", error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
});
