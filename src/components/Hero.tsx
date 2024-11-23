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
    <section className="w-full px-2 mx-auto min-h-[253px] md:min-h-screen relative shadow-lg shadow-black/20 md:rounded-[30px] overflow-hidden">
      <div className="w-full h-fit md:min-h-screen absolute overflow-hidden md:rounded-[30px]">
        <Carousel
          plugins={[
            //@ts-ignore
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="md:bg-cover bg-no-repeat bg-contain md:bg-center w-full bg-hero-bg min-h-full flex flex-col md:rounded-[30px] saturate-150" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <div className="md:bg-cover bg-no-repeat bg-contain md:bg-center w-full bg-carousel min-h-screen flex flex-col  md:rounded-[30px] saturate-150" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <div className="md:bg-cover bg-no-repeat bg-contain md:bg-center w-full bg-carousel3 min-h-screen flex flex-col  md:rounded-[30px] saturate-150" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <div className="md:bg-cover bg-no-repeat bg-contain md:bg-center w-full bg-carousel2 min-h-screen flex flex-col  md:rounded-[30px] saturate-150" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-10 md:mt-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          BetterWhips
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/80">
          Where Quality Drives Forward
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-2 hidden md:block text-xl text-white/70"
        >
          Experience professional car and services with our high-end vehicles.
        </motion.p>

        {/* Call-to-Actions */}
        <div className="mt-8 flex gap-4">
          <Button asChild className="px-6 py-3 text-lg">
            <Link href="#new">Browse Fleet</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 text-lg hidden md:flex border-white/50 bg-gradient-to-tr from-blue-500 to-blue-300 text-white font-bold hover:border-sky transition-all duration-200"
          >
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Sidebar Tabs */}
      <div className="absolute hidden lg:flex bottom-0 md:bottom-16 right-0 sm:right-10 w-full md:w-80 p-6 bg-white/90 rounded-tl-lg shadow-lg">
        <Tabs defaultValue="account" className="!w-full">
          <TabsList className="w-full">
            <TabsTrigger
              value="account"
              className="!w-full py-2 bg-gradient-to-r from-blue-500 to-blue-300 text-white font-bold"
            >
              Drive a Dream
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="!w-full ">
            <ReserveForm />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Hero;
