"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthActions } from "@convex-dev/auth/react";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the redirect URL from query parameters, default to "/pay" if not provided
  const redirectUrl = searchParams.get("redirect") || "/pay";

  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="w-full hidden overflow-hidden bg-cover bg-center h-screen md:flex flex-col  bg-hero-bg" />
      <div className="md:w-[70%] w-full h-screen flex items-center flex-col space-y-4 justify-center bg-slate-900 px-10 lg:px-20">
        <div className="flex gap-2 flex-col">
          <h2 className=" text-balance text-xl md:text-3xl font-bold tracking-tighter text-white">
            {step === "signIn" ? "Welcome back" : "Create an account"}
          </h2>
          <p className="text-[16px] text-pretty font-medium text-green-50">
            {step === "signIn"
              ? "You don't have an account"
              : "Already have an account"}
            <span
              className="text-blue-300 font-semibold ml-2 cursor-pointer"
              onClick={() => setStep(step === "signIn" ? "signUp" : "signIn")}
            >
              {step === "signIn" ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
        <form
          className="flex items-center flex-col gap-3 justify-center w-full space-y-2"
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            try {
              setLoading(true);
              // Wait for sign-in to complete before redirecting
              await signIn("password", formData);
              // Redirect to the original URL
              router.push(redirectUrl);
              setLoading(false);
            } catch (error) {
              // Handle any sign-in errors here
              console.error("Sign in failed:", error);
              setLoading(false);
            }
          }}
        >
          {" "}
          <div className="w-full ">
            <Label className="!text-left self-start text-white">Email</Label>
            <Input
              name="email"
              placeholder="Email"
              type="text"
              className="!p-2 border w-full rounded text-white"
              required
            />
          </div>
          <div className="w-full ">
            <Label className="text-left self-start text-white">Password</Label>
            <Input
              name="password"
              type="password"
              className="!p-2 border w-full rounded text-white"
              required
            />
          </div>
          <input name="flow" type="hidden" value={step} />
          <Button
            disabled={loading}
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white w-full rounded hover:bg-blue-600"
          >
            {step === "signIn" ? (
              loading ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4" />
                  "Sign in"
                </>
              ) : (
                "Sign in"
              )
            ) : loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                "Sign up"
              </>
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
