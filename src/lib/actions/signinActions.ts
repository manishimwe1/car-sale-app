"use server";

import { signIn } from "@/auth";

export async function handleSignIn(email: string, password: string) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: "/dashboard", // or wherever you want to redirect after login
    });
    return { success: true, error: null };
  } catch (error) {
    console.log(error);

    return { success: false, error: "Incorrect Password " };
  }
}
