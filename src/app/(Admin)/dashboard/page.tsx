import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import AllCarscard from "./_components/allCarscard";

const Dashboardpage = async () => {
  const session = await auth();

  console.log(session);

  if (!session?.user) {
    redirect("/login");
  }
  return (
    <section className="p-10 h-full w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <AllCarscard title="All cars in system" id="car" />
        <AllCarscard title="All users" id="user" />
      </div>
    </section>
  );
};

export default Dashboardpage;
