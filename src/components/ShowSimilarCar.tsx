"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import CarShowCard from "./CarShowCard";
import Loader from "./Loader";
import SectionHeaderBox from "./SectionHeaderBox";

const ShowSimilarCar = ({ id }: { id: Id<"cars"> }) => {
  const cars = useQuery(api.cars.getSimilarCar, { id });
  // const logo = useQuery(api.cars.getCarlogo);

  return (
    <section className="space-y-4 px-4">
      <SectionHeaderBox
        title="Similar Cars"
        subTitle="Here you can see different similar cars"
      />
      <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 space-x-4 place-items-center gap-6 justify-center ">
        {cars
          ? cars.map((car) => {
              return <CarShowCard car={car} key={car._id} />;
            })
          : [1, 23].map((i) => <Loader key={i} />)}
      </div>
    </section>
  );
};

export default ShowSimilarCar;
