import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import AllCarscard from "./_components/allCarscard";
import ChartComponents from "./_components/chart";

const Dashboardpage = async () => {
  const session = await auth();

  console.log(session);

  if (!session?.user) {
    redirect("/login");
  }
  return (
    <section className="py-10 h-full w-full flex flex-col space-y-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6  w-full h-full">
        <AllCarscard title="All cars in system" id="car" />
        <AllCarscard title="Total Favorite" id="favorite" />
        <AllCarscard title="Total costumers" id="user" />
      </div>
      <div className="w-full h-full flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="w-full h-full p-2 bg-background ">
          <h4 className="text-xl text-stone-600 ">Page views:</h4>
          <ChartComponents />
        </div>
        <div className="w-full h-full border"></div>
      </div>
    </section>
  );
};

export default Dashboardpage;
