"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import CarShowCard from "./CarShowCard";
import Loader from "./Loader";
import SectionHeaderBox from "./SectionHeaderBox";

const ShowCase = () => {
  const cars = useQuery(api.cars.getCar);
  // const logo = useQuery(api.cars.getCarlogo);

  return (
    <section className="space-y-4 px-4 w-full">
      <SectionHeaderBox
        showNextBtn={true}
        title="new cars"
        subTitle="Here you can see different new cars"
      />
      <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 space-x-4 place-items-center gap-8 justify-center">
        {cars
          ? cars.map((car) => {
              return <CarShowCard car={car} key={car._id} />;
            })
          : [1, 23, 4].map((i) => <Loader key={i} />)}
      </div>
    </section>
  );
};

export default ShowCase;
