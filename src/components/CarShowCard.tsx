"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Cable, Car, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Id } from "../../convex/_generated/dataModel";
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
            <div className="flex items-center mt-1 gap-2">
              <div className="flex">
                <Car className="text-slate-800 h-5 w-4" />
                <p className="text-[14px] text-pretty font-medium text-slate-800">
                  {car.brand}
                </p>
              </div>

              <hr className="h-3 w-0 border border-slate-500" />
              <div className="flex">
                <Cable className="text-slate-800 h-5 w-4" />
                <p className="text-[14px] text-pretty font-medium text-slate-800">
                  Electric
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center w-full mt-2">
              <div className="flex items-center gap-1 ">
                <Image
                  src={"/certified.svg"}
                  alt="certfeid"
                  width={20}
                  height={20}
                  className="border border-green-400 rounded-full"
                />
                <p className="text-green-400 font-normal text-xs">Certified</p>
              </div>

              <div className="w-1.5 bg-gray-400 rounded-full h-1.5" />
              <div className="flex items-center gap-1 ">
                <Image
                  src={"/inspected.svg"}
                  alt="certfeid"
                  width={20}
                  height={20}
                  className="border border-green-400 rounded-full"
                />
                <p className="text-green-400 font-normal text-xs">Inspected</p>
              </div>

              <div className="w-1.5 bg-gray-400 rounded-full h-1.5" />
              <div className="flex items-center gap-1 ">
                <Image
                  src={"/warranted.svg"}
                  alt="certfeid"
                  width={20}
                  height={20}
                  className="border border-green-400 rounded-full"
                />
                <p className="text-green-400 font-normal text-xs">6 Months</p>
              </div>
            </div>
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
