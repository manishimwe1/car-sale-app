"use client";

import { ABOUTUS, CarCategories, FOLLOWUS } from "@/constants";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";

const Footer = () => {
  const cars = useQuery(api.cars.getCar);

  return (
    <section className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
      <div className="flex flex-col gap-2 w-full">
        <Headers label="Popular Makes" />
        {CarCategories.map((label) => (
          <Labels label={label.title} key={label.title} />
        ))}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Headers label="Popular Car Types" />
        {cars?.map((label) => <Labels key={label._id} label={label.brand} />)}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Headers label="ABOUT US" />
        {ABOUTUS.map((label) => (
          <Labels label={label} key={label} />
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Headers label="FOLLOW US" />
        {FOLLOWUS.map((label) => (
          <Labels label={label} key={label} />
        ))}
      </div>
    </section>
  );
};

export default Footer;
const Headers = ({ label }: { label: string }) => (
  <h2 className="text-lg capitalize font-semibold mb-2">{label}</h2>
);
const Labels = ({ label }: { label: string }) => (
  <p className="text-base text-slate-800 capitalize">{label}</p>
);
