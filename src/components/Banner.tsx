import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-blue-600">
      <div className="py-4 flex flex-col md:flex-row px-6 gap-3 container mx-auto items-center justify-between">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center py-2 justify-center md:justify-start">
            <hr className=" border-4 w-16  " />
            <hr className=" border-4 w-16  border-black" />
          </div>
          <div className="space-y-1">
            <h4 className="text-white text-lg md:text-2xl  font-bold text-pretty">
              We Provide You The Best Offer, get{" "}
              <span className="text-green-200 underline underline-offset-2">
                10% discount
              </span>
            </h4>
            <p className="text-gray-200 text-sm">
              You can trust us like these happy clients! Check our reviews
              below!
            </p>
            <div className="flex items-center justify-center">
              <Button className="px-4 mt-2" asChild>
                <Link href={"/reserve"}>Get Discount</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:h-[300px] h-[150px] md:w-[500px] w-[250px] relative ">
          <Image src={"/listingcar.webp"} alt="listingcar" fill />
        </div>
      </div>
    </div>
  );
};

export default Banner;
