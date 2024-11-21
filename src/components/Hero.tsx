"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ReserveForm from "./ReserveForm";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <section className="w-full px-2 mx-auto min-h-[290px] md:min-h-screen relative shadow-lg shadow-black/20 md:rounded-[30px] overflow-hidden">
      <div className="w-full h-fit md:min-h-screen absolute overflow-hidden md:rounded-[30px]">
        <Carousel
          plugins={[
            //@ts-ignore
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="md:bg-cover bg-no-repeat bg-contain md:bg-center w-full bg-hero-bg min-h-full flex flex-col md:rounded-[30px]" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <div className="md:bg-cover bg-no-repeat bg-contain md:bg-center w-full bg-hero-bg min-h-screen flex flex-col  md:rounded-[30px]" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <div className="md:bg-cover bg-no-repeat bg-contain md:bg-center w-full bg-hero-bg min-h-screen flex flex-col  md:rounded-[30px]" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="bg-gradient-to-b from-black/40 via-black/40 to-transparent absolute  mx-auto w-full h-fit md:rounded-[30px] ">
        <div className=" mt-14 md:mt-16 flex items-center flex-col">
          <h2 className=" text-balance text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white sm:text-6xl mb-6">
            BetterWhips
          </h2>
          <div className="px-4 py-2 flex flex-col items-center  mb-4">
            <p className="text-[16px] text-pretty font-medium text-green-50">
              Where Quality Drives Forward
            </p>
            <motion.p
              // animate={{ x: 100 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl capitalize text-pretty font-medium text-white"
            >
              We sell professional car{" "}
            </motion.p>
          </div>

          <Button asChild>
            <Link href={"#new"}>Open Fleet</Link>
          </Button>
        </div>
      </div>

      <div className="bg-white/90 hidden md:block py-6 p-4 rounded-2xl shadow-black shadow-lg md:w-80 w-full  h-fit absolute bottom-0 md:bottom-16 right-0 sm:right-10">
        <Tabs defaultValue="account" className="w-full border-black ">
          <TabsList className="!w-full">
            <TabsTrigger
              value="account"
              className="!py-2  !bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 !w-full !text-white"
            >
              Drive a Dream
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-full">
            <ReserveForm />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Hero;
