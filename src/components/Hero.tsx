import { Button } from "@/components/ui/button";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen flex justify-between  px-8 bg-hero-bg rounded-[30px] relative">
      <div className=" mx-auto  h-fit mt-16 flex items-center flex-col">
        <h2 className="text-pretty text-6xl font-bold tracking-widest text-gray-950 sm:text-6xl mb-6">
          Luxury Limo Hire
        </h2>
        <div className="px-4 py-2 flex flex-col items-center bg-white/20 rounded-md mb-4">
          <p className="text-[16px] text-pretty font-medium text-slate-800">
            We offer professional car & limousine services{" "}
          </p>
          <p className="text-[16px] text-pretty font-medium text-slate-800">
            with our high-end vehicles.
          </p>
        </div>
        <Button className="bg-black hover:bg-black/60 text-white py-3 px-6 rounded-lg">
          Open Fleet
        </Button>
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
