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
import { Id } from "../../convex/_generated/dataModel";
import SectionHeaderBox from "./SectionHeaderBox";
import CarShowCard from "./CarShowCard";

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

export default ShowSimilarCar;
