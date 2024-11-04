"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Cable, Car, Clock12, Fuel, Heart, Share2, Vault } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Doc, Id } from "../../convex/_generated/dataModel";
import CarShowCardFooter from "./CarShowCardFooter";
type carType = {
  urls: (string | null)[];
  logoUrls: string | null;
  _id: Id<"cars">;
  _creationTime: number;
  brand: string;
  logoId: Id<"_storage">;
  money: number;
  name: string;
  imageIds: Id<"_storage">[];
  KM_Done: number;
  typeOfCar: string;
  numberOfViews: number;
};
const CarShowCard = ({ car }: { car: carType }) => {
  return (
    <div key={car._id} className="w-full  cursor-pointer">
      <Carousel>
        <Link href={`/buy/${car.brand}/${car._id}`}>
          <CarouselContent className=" rounded-xl ">
            {car.urls.map((url) => {
              return (
                <CarouselItem key={url}>
                  <div className="relative  w-full h-[280px]  flex flex-col space-y-1 rounded-xl">
                    <Image
                      src={url ?? ""}
                      alt="car"
                      fill
                      className="rounded-xl"
                    />
                    <Image
                      src={car.logoUrls ?? ""}
                      alt="car"
                      width={50}
                      height={50}
                      className="rounded-full absolute bottom-0 object-contain right-4"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Link>
        <CarouselPrevious className="ml-[50px]" />
        <CarouselNext className="mr-[50px]" />
      </Carousel>
      <Link href={`/buy/${car.brand}/${car._id}`}>
        <div className=" py-4 px-6 w-full flex justify-between items-center">
          <div className="flex flex-col ">
            <p className="text-[14px] text-pretty font-medium text-slate-800">
              {car.name}
            </p>
            <p className="text-2xl  font-bold text-blue-700 md:text-left mt-2">
              {Number(car.money).toLocaleString("us")} Rwf
            </p>
            <CarDetails car={car} />
            <CarShowCardFooter />
          </div>
          <div className="flex items-center gap-2">
            <Share2 className="text-secondary-foreground h-5 w-5" />
            <Heart className="text-secondary-foreground h-5 w-5" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarShowCard;

export function CarDetails({ car }: { car: Doc<"cars"> }) {
  return (
    <div className="flex items-center mt-1 gap-4">
      <div className="flex">
        <Car className="text-slate-800 h-5 w-4" />
        <p className="text-[14px] text-pretty font-medium capitalize text-slate-800">
          {car.brand}
        </p>
      </div>

      <hr className="h-3 w-0 border border-slate-500" />
      {car.typeOfCar === "electric" && (
        <div className="flex items-center gap-1">
          <Cable className="text-slate-500 h-5 w-4" />
          <p className="text-[14px] text-pretty font-medium text-slate-800">
            {car.typeOfCar}
          </p>
        </div>
      )}
      {car.typeOfCar === "diesel" && (
        <div className="flex items-center gap-1">
          <Fuel className="text-slate-500 h-5 w-4" />
          <p className="text-[14px] text-pretty font-medium text-slate-800">
            {car.typeOfCar}
          </p>
        </div>
      )}
      {car.typeOfCar === "hybrid" && (
        <div className="flex items-center gap-1">
          <Vault className="text-slate-500 h-5 w-4" />
          <p className="text-[14px] text-pretty font-medium text-slate-800">
            {car.typeOfCar}
          </p>
        </div>
      )}
      <div className="flex items-center gap-1">
        <Clock12 className="text-slate-500 h-5 w-4" />
        <p className="text-[14px] text-pretty font-medium text-slate-800">
          {car.KM_Done}KM
        </p>
      </div>
    </div>
  );
}
