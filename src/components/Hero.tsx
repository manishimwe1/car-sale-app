"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "./Header";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen flex flex-col  bg-hero-bg rounded-b-[30px] relative">
      <div className="bg-gradient-to-b from-black/40 via-black/40 to-transparent  mx-auto w-full h-fit ">
        <div className=" mt-16 flex items-center flex-col">
          <h2 className="text-pretty text-4xl md:text-6xl font-bold tracking-widest text-white sm:text-6xl mb-6">
            BetterWhips
          </h2>
          <div className="px-4 py-2 flex flex-col items-center  mb-4">
            <p className="text-[16px] text-pretty font-medium text-green-50">
              We sell professional car{" "}
            </p>
            <motion.p
              // animate={{ x: 100 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg text-pretty font-medium text-white"
            >
              Where Quality Drives Forward
            </motion.p>
          </div>
          <Button
            className="bg-black hover:bg-black/60 text-white py-3 px-6 rounded-lg"
            asChild
          >
            <Link href={"#new"}>Open Fleet</Link>
          </Button>
        </div>
      </div>

      <div className="bg-white/90 hidden md:block py-6 p-4 rounded-2xl shadow-black shadow-lg md:w-72 w-full  h-fit absolute bottom-0 md:bottom-10 right-0 sm:right-10">
        <Tabs defaultValue="account" className="w-full border-black ">
          <TabsList>
            <TabsTrigger value="account" className="">
              Distance
            </TabsTrigger>
            <TabsTrigger value="password">Hourly</TabsTrigger>
            <TabsTrigger value="password">Flat Rate</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-full">
            <form className="space-y-4 w-full">
              <div>
                <input
                  type="text"
                  placeholder="Pick-up Address"
                  className="border border-gray-300 p-1 w-full rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Drop-off Address"
                  className="border border-gray-300 p-1 w-full rounded"
                />
              </div>
              <div>
                <input
                  type="date"
                  id="date"
                  placeholder="Pick-up Date"
                  className="border border-gray-300 p-1 w-full rounded"
                />
              </div>
              <div>
                <input
                  type="time"
                  id="time"
                  placeholder="Pick-up Time"
                  className="border border-gray-300 p-1 w-full rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-black/60 text-white py-2 rounded-2xl"
              >
                Reserve Now
              </button>
            </form>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Hero;
