"use client";

import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import AllCarscard from "../_components/allCarscard";

const AllCarPage = () => {
  const cars = useQuery(api.cars.getCar);
  return (
    <section className="hidden md:flex flex-col md:border-r-2 h-screen  border-slate-200/60 shadow-md shadow-slate-200/60 md:w-[200px]  px-2 space-y-2">
      {cars ? (
        cars.map((car) => <AllCarscard car={car} />)
      ) : (
        <Loader2 className="animate-spin h-4 w-4" />
      )}
    </section>
  );
};

export default AllCarPage;
