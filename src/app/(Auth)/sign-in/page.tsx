"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the redirect URL from query parameters, default to "/pay" if not provided
  const redirectUrl = searchParams.get("redirect") || "/pay";

  return (
    <form
      className="flex items-center flex-col gap-3 justify-center max-w-[300px]"
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
          // Wait for sign-in to complete before redirecting
          await signIn("password", formData);
          // Redirect to the original URL
          router.push(redirectUrl);
        } catch (error) {
          // Handle any sign-in errors here
          console.error("Sign in failed:", error);
        }
      }}
    >
      <input
        name="email"
        placeholder="Email"
        type="text"
        className="p-2 border rounded"
        required
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        className="p-2 border rounded"
        required
      />
      <input name="flow" type="hidden" value={step} />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {step === "signIn" ? "Sign in" : "Sign up"}
      </button>
      <button
        type="button"
        className="text-blue-500 hover:text-blue-600"
        onClick={() => {
          setStep(step === "signIn" ? "signUp" : "signIn");
        }}
      >
        {step === "signIn" ? "Sign up instead" : "Sign in instead"}
      </button>
    </form>
  );
}
