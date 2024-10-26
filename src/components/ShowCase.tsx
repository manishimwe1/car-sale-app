import React from "react";
import { Button } from "./ui/button";
import { Cable, GitGraph, Heart, MoveRight, Share2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ShowCase = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        <Button variant={"link"} className="hidden md:flex">
          View all <MoveRight className="text-slate-800 w-4 ml-1 " />
        </Button>
      </div>
      <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-32  justify-center px-12 ">
        {data.map((_, i) => (
          <div key={i} className=" w-[400px] h-[280px] pt-2">
            <Carousel>
              <CarouselContent className=" rounded-xl flex ">
                <CarouselItem>
                  <div className="relative w-[400px] h-[280px]  flex flex-col space-y-1 rounded-xl">
                    <Image
                      src="/2.webp"
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
                <CarouselItem>
                  <div className="relative w-[400px] h-[280px]  flex flex-col space-y-1 rounded-xl">
                    <Image
                      src="/11.webp"
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
                <CarouselItem>
                  <div className="relative w-[400px] h-[280px]  flex flex-col space-y-1 rounded-xl">
                    <Image
                      src="/3.webp"
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
              </CarouselContent>
              <CarouselPrevious className="ml-[50px]" />
              <CarouselNext className="mr-[50px]" />
            </Carousel>
            <div className=" py-4 px-6 w-full flex justify-between items-center">
              <div className="flex flex-col ">
                <p className="text-[14px] text-pretty font-medium text-slate-800">
                  BYD ATTO3 2023
                </p>
                <p className="text-2xl  font-bold text-blue-700 md:text-left mt-2">
                  {Number(40000000000).toLocaleString("us")} Rwf
                </p>
                <div className="flex items-center mt-1 gap-2">
                  <div className="flex">
                    <GitGraph className="text-slate-800 h-5 w-4" />
                    <p className="text-[14px] text-pretty font-medium text-slate-800">
                      Automatic
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowCase;
