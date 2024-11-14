import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const SignInButton = () => {
  return (
    <div>
      <form
      // action={async () => {
      //   "use server";
      //   await signIn("google");
      // }}
      >
        <Button variant={"secondary"} type="submit">
          <Image
            src={"/google.svg"}
            className="size-4"
            alt="google logo"
            width={3}
            height={3}
          />
          Signin with Google
        </Button>
      </form>
    </div>
  );
};

export default SignInButton;
