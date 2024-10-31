"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "convex/react";
import { Cable, Car, Heart, MoveRight, Share2 } from "lucide-react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import Loader from "./Loader";
import { Button } from "./ui/button";
import Link from "next/link";
import CarShowCard from "./CarShowCard";
import SectionHeaderBox from "./SectionHeaderBox";

const ShowCaseOverMoney = () => {
  const cars = useQuery(api.cars.getCarLessThanMoney, { money: 5000000 });
  // const logo = useQuery(api.cars.getCarlogo);

  return (
    <section className="space-y-4  p-2">
      <SectionHeaderBox
        title="Cars Under 10 000 000 RWF"
        subTitle="Here you can see different cheap cars under 10 000 000 RWF"
      />
      <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 space-x-4 place-items-center gap-32  justify-center px-4">
        {cars ? (
          cars.map((car) => {
            return <CarShowCard car={car} key={car._id} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default ShowCaseOverMoney;
