"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import CarShowCard from "./CarShowCard";
import Loader from "./Loader";
import SectionHeaderBox from "./SectionHeaderBox";

const ShowCaseOverMoney = () => {
  const cars = useQuery(api.cars.getCarLessThanMoney, { money: 10000000 });
  // const logo = useQuery(api.cars.getCarlogo);

  return (
    <section className="space-y-4 px-4">
      <SectionHeaderBox
        title="Cars Under 10 000 000 RWF"
        subTitle="Here you can see different cheap cars under 10 000 000 RWF"
      />
      <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 space-x-4 place-items-center gap-6 justify-center ">
        {cars
          ? cars.map((car) => {
              return <CarShowCard car={car} key={car._id} />;
            })
          : [1, 23].map(() => <Loader />)}
      </div>
    </section>
  );
};

export default ShowCaseOverMoney;
