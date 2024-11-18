"use client";

import { DashboardForm } from "@/components/DashbaordForms";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { Skeleton } from "@/components/ui/skeleton";

const EditPage = ({ params }: { params: Promise<{ id: Id<"cars"> }> }) => {
  const { id } = React.use(params);
  const car = useQuery(api.cars.getCarById, { id: id });
  console.log(car);

  return (
    <section className="flex max-w-2xl mx-auto items-center justify-center w-full p-6">
      {car ? (
        <div className="w-full h-full md:px-10">
          <DashboardForm car={car} />
        </div>
      ) : (
        <div className="w-full h-full md:px-10 mt-14">
          <Skeleton className="w-full h-10" />
        </div>
      )}
    </section>
  );
};

export default EditPage;
