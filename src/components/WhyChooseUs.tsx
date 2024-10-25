import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="mt-32 border">
      <div className="md:flex text-center items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="text-2xl  font-bold text-center md:text-left">
            Why Choose Us
          </h1>
          <p className="text-[14px] text-pretty font-medium text-slate-800">
            Here you can see different new cars
          </p>
        </div>
        <Button variant={"link"} className="hidden md:flex">
          View all <MoveRight className="text-slate-800 w-4 ml-1 " />
        </Button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
