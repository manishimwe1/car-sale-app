import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboardpage = async () => {
  const session = await auth();
  console.log(session);

  if (!session?.user) {
    redirect("/login");
  }
  return (
    <section className="p-10 h-full w-full">
      <div></div>
    </section>
  );
};

export default Dashboardpage;
