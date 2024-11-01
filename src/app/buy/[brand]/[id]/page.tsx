"use client";

import AboutUs from "@/components/AboutUs";
import CarOverView from "@/components/CarOverView";
import ShowSimilarCar from "@/components/ShowSimilarCar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AboutUsData } from "@/constants";
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
} from "lucide-react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Banner from "@/components/Banner";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  params: {
    brand: string;
    id: Id<"cars">;
  };
};

const DetailsPage = ({ params }: Props) => {
  const car = useQuery(api.cars.getCarById, { id: params.id });
  if (!params.id) return;

  return (
    <section className="flex flex-col gap-6 w-full container mx-auto py-10 ">
      <div className="w-full flex flex-col lg:flex-row px-5 lg:px-10 text-center justify-between gap-8">
        <div className="w-full shadow-md shadow-sky-200 rounded-xl">
          <Carousel>
            <CarouselContent className=" rounded-xl flex ">
              {car ? (
                car.images.map((url) => (
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
                ))
              ) : (
                <Skeleton className="w-full h-[350px] lg:h-[500px] rounded-xl space-y-1 " />
              )}
            </CarouselContent>
            {car ? (
              <>
                <CarouselPrevious className="ml-[80px]" />
                <CarouselNext className="mr-[80px]" />
              </>
            ) : null}
          </Carousel>
        </div>
        <div className="bg-[#f0f9ff] w-full lg:w-[60%] h-full lg:h-[400px]  rounded-sm rounded-r-xl p-2 shadow-sm shadow-blue-400/20">
          <div className="flex justify-between text-start p-4">
            {car ? (
              <p className="text-3xl font-bold text-blue-700 md:text-left mt-2">
                {Number(car?.money).toLocaleString("us")} Rwf
              </p>
            ) : (
              <Skeleton className="w-[200px] h-10 rounded-md" />
            )}
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
            {car ? (
              <p className="text-xl text-pretty capitalize font-medium text-slate-800 ">
                {car?.name}
              </p>
            ) : (
              <Skeleton className="w-full h-6 mb-2 rounded-md" />
            )}

            {car ? (
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
            ) : (
              <div className="flex flex-col gap-2 text-center justify-center">
                <Skeleton className="w-full h-6 rounded-md" />
                <div className="flex gap-1 text-center justify-center">
                  <Skeleton className="w-24 h-6 rounded-md" />
                  <Skeleton className="w-24 h-6 rounded-md" />
                  <Skeleton className="w-16 h-6 rounded-md" />
                </div>
              </div>
            )}
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
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 gap-4 px-5">
        {AboutUsData.map((data) => (
          <AboutUs key={data.title} data={data} />
        ))}
      </div>
      <CarOverView />
      <div>
        <ShowSimilarCar id={params.id} />
      </div>
      <div className="mt-4 space-y-4">
        <WhyChooseUs />
        <Banner />
      </div>
    </section>
  );
};

export default DetailsPage;
