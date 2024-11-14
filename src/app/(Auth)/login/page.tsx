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
import { handleSignIn } from "@/lib/actions/signinActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    redirect("/dashboard");
  }
  const [errorInRegister] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Get the redirect URL from query parameters, default to "/pay" if not provided
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const user = await handleSignIn(values.email, values.password);
    console.log(user, "!!!!!!!!!!!!!");

    if (user?.success) {
      form.reset();
      setLoading(false);
      router.push("/dashboard");
    }
    if (user?.error) {
      router.refresh();
      // setErrorInRegister(user?.error);
      form.reset();
      setLoading(false);
    }
  }
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="w-full hidden overflow-hidden bg-cover bg-center h-screen md:flex flex-col  bg-hero-bg" />
      <div className="md:w-[70%] w-full h-screen flex items-center flex-col space-y-4 justify-center bg-slate-900 px-10 lg:px-20">
        <div className="flex gap-2 flex-col">
          <h2 className=" text-balance text-xl md:text-3xl font-bold tracking-tighter text-white">
            Welcome back
          </h2>
          {/* <p className="text-[16px] text-pretty font-medium text-green-50">
            "You dont have an account"
            <Link
              href={"/register"}
              className="text-blue-300 font-semibold ml-2 cursor-pointer"
            >
              "Sign up"
            </Link>
          </p> */}
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
              disabled={loading}
              className="w-full bg-blue-600 disabled:bg-stone-700 disabled:cursor-wait hover:bg-blue-700 shadow-lg shadow-black"
              type="submit"
            >
              {loading ? (
                <p className="flex items-center gap-2 justify-center">
                  <Loader2 className="animate-spin h-4 w-4 " /> Login... &rarr;
                </p>
              ) : (
                <p>Login &rarr;</p>
              )}
            </Button>
            {errorInRegister ? (
              <p className="flex items-center gap-1 justify-center text-red-500 font-thin text-sm">
                {errorInRegister} try to{" "}
                <Link
                  href="/register"
                  className="text-red-200 underline cursor-pointer underline-offset-2"
                >
                  Register
                </Link>
              </p>
            ) : (
              <p className="flex items-end gap-1 justify-end text-white font-thin text-sm">
                You dont have an account{" "}
                <Link
                  href="/register"
                  className="underline ml-2 cursor-pointer"
                >
                  Register
                </Link>
              </p>
            )}
          </form>
        </Form>
        <SignInButton />
      </div>
    </section>
  );
}
