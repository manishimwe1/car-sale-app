import Image from "next/image";
import React from "react";

const CarShowCardFooter = () => {
  return (
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
        <p className="text-green-400 font-normal text-xs text-nowrap">
          6 Months
        </p>
      </div>
    </div>
  );
};

export default CarShowCardFooter;
