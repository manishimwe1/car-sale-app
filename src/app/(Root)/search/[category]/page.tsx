"use client";

import CarShowCard from "@/components/CarShowCard";
import FilterBox from "@/components/FilterBox";
import Loader from "@/components/Loader";
import SectionHeaderBox from "@/components/SectionHeaderBox";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import React from "react";
import Footer from "@/components/Footer";
import { Doc, Id } from "../../../../../convex/_generated/dataModel";

type carsType =
  | {
      urls: (string | null)[];
      logoUrls: string | null;
      _id: Id<"cars">;
      _creationTime: number;
      brand: string;
      logoId: Id<"_storage">;
      money: number;
      name: string;
      imageIds: Id<"_storage">[];
      typeOfCar: string;
      numberOfViews: number;
      KM_Done: number;
    }[]
  | undefined
  | null;

const Searchpage = ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = React.use(params);
  let cars: carsType;

  if (category === "all-cars") {
    cars = useQuery(api.cars.getCar);
  } else {
    cars = useQuery(api.cars.getCarByBrand, {
      brand: category.toLowerCase(),
    });
  }

  return (
    <section className="w-full lg:px-0 space-y-10">
      <div className="w-full h-full container mx-auto py-10 ">
        <div className="h-full w-full mt-10 py-10">
          <FilterBox category={category} />
        </div>
        <SectionHeaderBox
          showNextBtn={false}
          title={`Search for ${category}`}
          subTitle=""
        />
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 space-x-4 place-items-center gap-8 justify-center">
          {cars
            ? cars.map((car) => {
                return <CarShowCard car={car} key={car._id} />;
              })
            : [1, 23, 4].map((i) => <Loader key={i} />)}
        </div>
        {cars?.length === 0 && (
          <div className="flex items-center justify-center w-full">
            <p className="text-lg py-4">No car found..</p>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Searchpage;
