"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "convex/react";
import {
  Cable,
  Car,
  Clock2,
  Eye,
  Globe,
  Heart,
  Share2,
  ThumbsUp,
  Timer,
} from "lucide-react";
import Image from "next/image";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import { SocialIcon } from "react-social-icons";
import AboutUs from "@/components/AboutUs";
import { AboutUsData } from "@/constants";
import CarOverView from "@/components/CarOverView";
import ShowCase from "@/components/ShowCase";
type Props = {
  params: {
    brand: string;
    id: Id<"cars">;
  };
};

const DetailsPage = ({ params }: Props) => {
  ID: {
  }
  const car = useQuery(api.cars.getCarById, { id: params.id });
  if (!params.id) return;

  return (
    <section className="flex flex-col gap-6 w-full container mx-auto py-10  px-5  ">
      <div className="w-full flex flex-col lg:flex-row  lg:px-10 text-center justify-between gap-8">
        <div className="w-full shadow-md shadow-sky-200 rounded-xl">
          <Carousel>
            <CarouselContent className=" rounded-xl flex ">
              {car?.images.map((url) => {
                return (
                  <CarouselItem key={url}>
                    <div className="relative w-full h-[350px] lg:h-[500px]  flex flex-col space-y-1 rounded-xl">
                      <Image
                        src={url ?? ""}
                        alt="car"
                        fill
                        className="rounded-xl object-cover"
                      />
                      <Image
                        src={car.logoUrls ?? ""}
                        alt="car"
                        width={50}
                        height={50}
                        className="rounded-full animate-pulse object-contain absolute bottom-2  right-4"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-[80px]" />
            <CarouselNext className="mr-[80px]" />
          </Carousel>
        </div>
        <div className="bg-[#f0f9ff] w-full lg:w-[60%] h-full lg:h-[400px]  rounded-sm rounded-r-xl p-2 shadow-sm shadow-blue-400/20">
          <div className="flex justify-between text-start p-4">
            <p className="text-3xl font-bold text-blue-700 md:text-left mt-2">
              {Number(car?.money).toLocaleString("us")} Rwf
            </p>
            <div className="flex items-center gap-3">
              <Share2 className="text-slate-600 h-5 w-5 cursor-pointer" />
              <Heart className="text-slate-600 h-5 w-5 cursor-pointer" />
            </div>
          </div>
          <div className="w-full flex p-4">
            <Button
              variant={"ghost"}
              className="shadow-md shadow-sky-300 items-center"
            >
              <ThumbsUp className="h-4 w-4" /> Favorite
            </Button>
          </div>
          <div className="flex items-start flex-col mt-1  bg-white overflow-hidden p-2 mx-4 rounded-md py-3">
            <p className="text-xl text-pretty capitalize font-medium text-slate-800 ">
              {car?.name}
            </p>
            <div className="flex gap-4 text-center justify-center mt-4">
              <div className="flex w-full text-center gap-1 items-center border-r px-4 rounded-lg border-black/40">
                <Car className="text-slate-800 h-7 w-5" />
                <p className="text-[9px] md:text-[14px] text-nowrap  font-medium capitalize text-slate-800">
                  {car?.brand}
                </p>
              </div>

              <div className="flex w-full text-center gap-1 items-center border-r px-4 rounded-lg border-black/40">
                <Cable className="text-slate-800 h-7 w-4" />
                <p className=" text-[9px] md:text-[14px] text-pretty font-medium capitalize text-slate-800">
                  Electric
                </p>
              </div>

              <div className="flex w-full text-center gap-1 items-center">
                <Clock2 className="text-slate-800 h-7 w-4" />
                <p className=" text-[9px] md:text-[14px] text-pretty font-medium capitalize text-slate-800">
                  0 Km
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
          <div className="w-full flex text-center justify-around p-4  ">
            <Button className="bg-blue-600 shadow-md shadow-sky-300">
              <Globe className="h-4 w-4" /> Buy online
            </Button>
            <Button>
              <SocialIcon
                // url="https://whatsapp.com"
                network="whatsapp"
                style={{ height: 20, width: 20 }}
                className="object-contain"
              />
              Whatsapp
            </Button>
          </div>
          <div className="w-full p-2 flex items-center justify-center gap-2">
            <Eye /> <p>Viewed 2 times today</p>
          </div>
          <div className="w-full p-2 mt-7 flex items-center justify-center gap-2">
            <Image
              src={"/verified.svg"}
              alt="certfeid"
              width={40}
              height={40}
              className=""
            />{" "}
            <p className=" text-pretty w-fit">
              All our cars have been inspected and reconditioned meticulously by
              our experts
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 gap-4">
        {AboutUsData.map((data, i) => (
          <AboutUs data={data} />
        ))}
      </div>
      <CarOverView />
      {/* <div>
        <ShowCase />
      </div> */}
    </section>
  );
};

export default DetailsPage;
