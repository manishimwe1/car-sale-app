"use client";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const DashBoardSideBar = () => {
  const cars = useQuery(api.cars.getCar);
  return (
    <section className="w-[200px] h-full px-2 space-y-2">
      {cars ? (
        cars.map((car) => (
          <nav
            key={car._id}
            className="w-full flex flex-col gap-2 space-y-2 items-center justify-center"
          >
            <Link href={""} className="w-full space-y-2">
              <p className="text-left w-full border border-white/40 shadow-sm rounded-md px-2 font-medium hover:underline hover:underline-offset-2 decoration-2 hover:text-slate-800 hover:font-semibold capitalize decoration-blue-500 text-slate-500  shadow-slate-400 py-1 ">
                {car.brand}
              </p>
            </Link>
          </nav>
        ))
      ) : (
        <Loader2 className="animate-spin h-4 w-4" />
      )}
    </section>
  );
};

export default DashBoardSideBar;
