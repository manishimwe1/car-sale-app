"use client";

import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthActions } from "@convex-dev/auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction, useMutation } from "convex/react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../../convex/_generated/api";
const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  lastname: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
});
export default function SignIn() {
  const { signIn } = useAuthActions();
  const [errorInRegister, setErrorInRegister] = useState<string | null>(null);
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");
  const [loading, setLoading] = useState(false);
  const registerUser = useAction(api.user.registerUser);
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "user",
    },
  });
  // Get the redirect URL from query parameters, default to "/pay" if not provided
  const redirectUrl = searchParams.get("redirect") || "/pay";
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const { success, error } = await registerUser({
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
      role: "user",
    });

    if (error !== null) {
      setErrorInRegister(error);
    }
    if (success) {
      router.push("/login");
    }
  }
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
              ? "You dont have an account"
              : "Already have an account"}
            <span
              className="text-blue-300 font-semibold ml-2 cursor-pointer"
              onClick={() => setStep(step === "signIn" ? "signUp" : "signIn")}
            >
              {step === "signIn" ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            {/* <form
          action={async (formData: FormData) => {
            
          }} */}
            {/* className="space-y-8 py-5 rounded-md " */}
            {/* > */}
            <div className="flex items-center justify-center gap-2 md:gap-8 text-white">
              <div className="flex items-start flex-col justify-center gap-2 w-full">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          className="text-white"
                          type="text"
                          placeholder="first name.."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-start flex-col justify-center gap-2 w-full">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          className="text-white"
                          type="text"
                          placeholder="last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-white"
                      type="email"
                      placeholder="john@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input className="text-white" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-black"
              type="submit"
            >
              Sign up &rarr;
            </Button>
            {errorInRegister ? (
              <p className="flex items-center gap-1 justify-center text-red-500 font-thin text-sm">
                {errorInRegister} try to{" "}
                <Link
                  href="/login"
                  className="text-red-200 underline cursor-pointer underline-offset-2"
                >
                  Login
                </Link>
              </p>
            ) : (
              <p className="flex items-end gap-1 justify-end text-white font-thin text-sm">
                Already have an account <Link href="/login">Login</Link>
              </p>
            )}
          </form>
        </Form>
        <SignInButton />
      </div>
    </section>
  );
}
