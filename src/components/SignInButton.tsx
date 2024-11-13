import { signIn } from "@/auth";
import { SignInAction } from "@/lib/actions/signinActions";
import React from "react";
import { Button } from "./ui/button";

const SignInButton = () => {
  return (
    <div>
      <form
        action={async () => {
          await SignInAction();
        }}
      >
        <Button variant={"secondary"} type="submit">
          Signin with Google
        </Button>
      </form>
    </div>
  );
};

export default SignInButton;
