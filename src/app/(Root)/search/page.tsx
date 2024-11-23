"use client";

import CarShowCard from "@/components/CarShowCard";
import FilterBox from "@/components/FilterBox";
import Loader from "@/components/Loader";
import SectionHeaderBox from "@/components/SectionHeaderBox";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import React, { Suspense, useState } from "react";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";

const Searchpage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SearchComponent />
    </Suspense>
  );
};

export default Searchpage;

function SearchComponent() {
  const [value, setValue] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  console.log(type);

  const cars = useQuery(
    type === "all cars" ? api.cars.getCar : api.cars.getCarByType,
    type === "all cars" ? {} : { type: type ?? "" }
  );
  // Use searchParams as needed
  return (
    <section className="w-full lg:px-0 space-y-10">
      <div className="w-full h-full container mx-auto py-10 flex flex-col items-center justify-center gap-4">
        <div className="h-full w-full mt-10 py-10">
          <FilterBox category={""} setValue={setValue} value={value} />
        </div>
        <div className="flex items-start justify-start w-full">
          <SectionHeaderBox
            showNextBtn={false}
            title={`Search for ${decodeURI(type ?? "")}`}
            subTitle=""
          />
        </div>
        <div className="grid w-full md:px-4 lg:px-6 py-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 space-x-4 place-items-center gap-8 justify-center">
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
}