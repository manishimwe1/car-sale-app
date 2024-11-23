"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import CarShowCard from "./CarShowCard";
import Loader from "./Loader";
import SectionHeaderBox from "./SectionHeaderBox";
import { Button } from "./ui/button";
import Link from "next/link";

export enum CarCategory {
  AllCars = "All Cars",
  Hybrid = "Hybrid",
  SUV = "SUV",
  Electric = "Electric",
  Diesel = "Diesel",
}

const ShowCase = () => {
  const cars = useQuery(api.cars.getCar);
  const categories = ["All Cars", "Hybrid", "SUV", "Electric", "Diesel"];
  const CATEGORY = "all-cars";

  return (
    <section className="space-y-8 px-4 w-full">
      <SectionHeaderBox
        link={`/search/${CATEGORY}`}
        showNextBtn={true}
        title="New Cars"
        subTitle="Discover a variety of cars to suit your needs"
      />
      <div className="flex gap-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            asChild
            key={category}
            className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition"
          >
            <Link href={`/search?type=${category.toLowerCase()}`}>
              {category}
            </Link>
          </Button>
        ))}
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {cars
          ? cars.map((car) => <CarShowCard car={car} key={car._id} />)
          : Array.from({ length: 6 }, (_, i) => <Loader key={i} />)}
      </div>
    </section>
  );
};

export default ShowCase;
