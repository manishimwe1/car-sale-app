import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboardpage = async () => {
  const session = await auth();
  console.log(session);

  if (!session?.user) {
    redirect("/login");
  }
  return <div>Dashboardpage</div>;
};

export default Dashboardpage;
