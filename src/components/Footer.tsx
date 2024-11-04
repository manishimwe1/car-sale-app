"use client";

import { ABOUTUS, CarCategories, FOLLOWUS } from "@/constants";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";

const Footer = () => {
  const cars = useQuery(api.cars.getCar);

  return (
    <section className="w-full">
      <div className=" bg-sky w-full flex ">
        <div className="container mx-auto py-10 px-6 w-full">
          <div className=" grid grid-cols-2 container md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
            <div className="flex flex-col gap-2 w-full">
              <Headers label="Popular Makes" />
              {CarCategories.map((label) => (
                <Labels label={label.title} key={label.title} />
              ))}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <Headers label="Popular Car Types" />
              {cars?.map((label) => (
                <Labels key={label._id} label={label.brand} />
              ))}
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
          </div>
        </div>
      </div>
      <div className="w-full py-4 px-2 flex flex-col   items-center justify-center ">
        <p className="text-balance text-sm text-slate-400 font-semibold">
          Copyright © Africar Group Pty Ltd - All rights reserved.
        </p>
        <p className="text-balance text-sm text-slate-400 font-semibold">
          BetterWhps, a member of the AFRICAR Group (Pty) Ltd, a duly registered
          in Rwanda
        </p>
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
