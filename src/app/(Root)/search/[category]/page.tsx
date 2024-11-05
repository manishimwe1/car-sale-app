"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { ChevronDown } from "lucide-react";
import FilterBox from "@/components/FilterBox";
import SectionHeaderBox from "@/components/SectionHeaderBox";
import CarShowCard from "@/components/CarShowCard";
import Loader from "@/components/Loader";

type Props = {
  params: {
    category: string;
  };
};
const page = ({ params }: Props) => {
  const cars = useQuery(api.cars.getCarByBrand, {
    brand: params.category.toLowerCase(),
  });
  return (
    <section className="w-full container mx-auto px-4 lg:px-0 space-y-10">
      <FilterBox params={params} />
      <SectionHeaderBox
        showNextBtn={false}
        title={`Search for ${params.category}`}
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
    </section>
  );
};

export default page;
