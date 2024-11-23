"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Cable, Car, Clock12, Fuel, Heart, Share2, Vault } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { Doc, Id } from "../../convex/_generated/dataModel";
import CarShowCardFooter from "./CarShowCardFooter";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

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
    <div
      key={car._id}
      className="w-full  cursor-pointer hover:shadow-md shadow-sky rounded-xl "
    >
      <Carousel>
        <Link href={`/buy/${car.brand}/${car._id}`} className="group">
          <CarouselContent className=" rounded-xl ">
            {car.urls.map((url) => {
              return (
                <CarouselItem
                  key={url}
                  className="h-full w-full relative  rounded-xl"
                >
                  <div className="  w-full h-full overflow-hidden shadow-xl shadow-black/5 flex flex-col space-y-1 rounded-xl">
                    <Image
                      as={NextImage}
                      isBlurred
                      isZoomed
                      width={600}
                      height={280}
                      alt={car.name}
                      src={url ?? ""}
                      className=""
                    />
                  </div>
                  <div className="absolute flex items-center justify-center right-2 bottom-2 z-10 rounded-full">
                    <Image
                      src={car.logoUrls ?? ""}
                      alt="car"
                      width={60}
                      height={60}
                      className="rounded-full object-contain aspect-auto"
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
      <div>
        <div className=" py-4 px-6 w-full hover:shadow-md rounded-xl shadow-sky  flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default CarShowCard;

export function CarDetails({ car }: { car: Doc<"cars"> }) {
  return (
    <div className="flex items-center mt-1 gap-4 py-2">
      <Link href={`/search/${car.brand}`}>
        <div className="flex gap-1 items-center hover:text-blue-500">
          <Car className="text-slate-800 h-5 w-4" />
          <p className="text-[14px] text-pretty font-medium capitalize text-slate-800">
            {car.brand}
          </p>
        </div>
      </Link>

      <hr className="h-3 w-0 border border-slate-500" />
      {car.typeOfCar === "electric" && (
        <Link href={`/search?type=electric`}>
          <div className="flex items-center gap-1">
            <Cable className="text-slate-500 h-5 w-4" />
            <p className="text-[14px] text-pretty font-medium text-slate-800">
              {car.typeOfCar}
            </p>
          </div>
        </Link>
      )}
      {car.typeOfCar === "diesel" && (
        <Link href={`/search?type=diesel`}>
          <div className="flex items-center gap-1">
            <Fuel className="text-slate-500 h-5 w-4" />
            <p className="text-[14px] text-pretty font-medium text-slate-800">
              {car.typeOfCar}
            </p>
          </div>
        </Link>
      )}
      {car.typeOfCar === "hybrid" && (
        <Link href={`/search?type=hybrid`}>
          <div className="flex items-center gap-1">
            <Vault className="text-slate-500 h-5 w-4" />
            <p className="text-[14px] text-pretty font-medium text-slate-800">
              {car.typeOfCar}
            </p>
          </div>
        </Link>
      )}
      <Link href={`/search?km=${car.KM_Done}`}>
        <div className="flex items-center gap-1">
          <Clock12 className="text-slate-500 h-5 w-4" />
          <p className="text-[14px] text-pretty font-medium text-slate-800">
            {car.KM_Done}KM
          </p>
        </div>
      </Link>
    </div>
  );
}
