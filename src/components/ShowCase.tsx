
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

const ShowCase = () => {
  const cars = useQuery(api.cars.getCar);

  
  return (
    
    <section className="space-y-4  p-2">
      <div className="md:flex text-center items-center justify-between">
        <div className="flex flex-col space-y-1"> 
          <h1 className="text-2xl  font-bold text-center md:text-left">
            New Cars
          </h1> 
          <p className="text-[14px] text-pretty font-medium text-slate-800">
            Here you can see different new cars
          </p>
        </div>
        < Button variant={"link"} className="hidden md:flex">
          View all <MoveRight className="text-slate-800 w-4 ml-1 " />
        </Button>
      </div>
      <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 space-x-4 place-items-center gap-32  justify-center px-12 ">
        {cars ? (
          cars.map((car) => {
           return <div key={car._id} className=" w-[400px] h-[280px] pt-2">
              <Carousel>
                <CarouselContent className=" rounded-xl flex ">
                {car.urls.map((url)=>{
                  
                  
                  return<CarouselItem key={url}>
                  <div className="relative w-[400px] h-[280px]  flex flex-col space-y-1 rounded-xl">
                    <Image
                      src={url ?? ''}
                      alt="car"
                      fill
                      className="rounded-xl" 
                    />
                    <Image
                      src="/logo.webp"
                      alt="car"
                      width={50}
                      height={50}
                      className="rounded-full absolute bottom-0 object-contain right-4"
                    />
                  </div>
                </CarouselItem>

                })} 
                  
                </CarouselContent>
                <CarouselPrevious className="ml-[50px]" />
                <CarouselNext className="mr-[50px]" />
              </Carousel>
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
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="text-secondary-foreground h-5 w-5" />
                  <Heart className="text-secondary-foreground h-5 w-5" />
                </div>
              </div>
            </div>}
))
         : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default ShowCase;
