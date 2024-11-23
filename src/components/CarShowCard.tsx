"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Share2 } from "lucide-react";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { CarDetails } from "./CarDetails";

type carType = {
  urls: (string | null)[];
  logoUrls: string | null;
  _id: string;
  money: number;
  name: string;
  brand: string;
  typeOfCar: string;
  KM_Done: number;
};

const CarShowCard = ({ car }: { car: carType }) => {
  return (
    <div className="group w-full cursor-pointer hover:shadow-lg rounded-lg overflow-hidden transition-shadow">
      <Carousel>
        <Link href={`/buy/${car.brand}/${car._id}`}>
          <CarouselContent>
            {car.urls.map((url) => (
              <CarouselItem key={url} className="relative">
                <Image
                  as={NextImage}
                  isBlurred
                  isZoomed
                  width={600}
                  height={280}
                  alt={car.name}
                  src={url ?? ""}
                  className="object-cover rounded-t-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Link>
        <CarouselPrevious className="ml-2" />
        <CarouselNext className="mr-2" />
      </Carousel>
      <div className="bg-white p-4 shadow rounded-b-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
          <p className="text-xl font-bold text-blue-600">
            {Number(car.money).toLocaleString()} Rwf
          </p>
        </div>
        <CarDetails car={car} />
        <div className="flex gap-4 mt-4">
          <Link href={`/buy/${car.brand}/${car._id}`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </Link>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarShowCard;
