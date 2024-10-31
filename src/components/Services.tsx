"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CarCategories } from "@/constants";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { api } from "../../convex/_generated/api";

const Services = () => {
  const cars = useQuery(api.cars.getCar);

  return (
    <section className="space-y-4 pt-28 ">
      <h3 className="text-2xl  font-bold text-center ">Search by categories</h3>

      <ScrollArea className="w-full  whitespace-nowrap ">
        <div className="flex w-full space-x-4 items-center justify-center gap-5 lg:gap-10">
          {CarCategories.map((categorie) => (
            <Link
              href={`/search/${categorie.href}`}
              className="flex flex-col cursor-pointer justify-center items-center"
              key={categorie.href}
            >
              <div className="relative h-[50px]  w-[100px] flex flex-col space-y-1">
                <Image src={categorie.imageUrl} alt={categorie.title} fill />
              </div>
              <p className="text-sm text-pretty  font-medium text-center">
                {categorie.title}
              </p>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-5 pt-10">
        <p className="text-muted-foreground text-center">
          Search car by brands
        </p>

        <div className="flex flex-wrap w-full gap-1 overflow-hidden md:gap-3 space-x-4 items-center justify-center mt-3">
          {cars?.map((car) => (
            <div
              key={car._id}
              className="flex flex-col space-y-2 gap-1 rounded-md cursor-pointer px-4 py-2 hover:border-2 border-blue-700 justify-center items-center"
            >
              <Image
                src={car.logoUrls ?? ""}
                alt="car brand"
                width={40}
                height={40}
              />
              <p className="text-sm text-pretty font-medium text-center capitalize">
                {car.brand}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
