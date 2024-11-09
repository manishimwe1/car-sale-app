import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const PayingPage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default PayingPage;
