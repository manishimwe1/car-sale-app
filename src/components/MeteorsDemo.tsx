import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import Link from "next/link";
export function MeteorsDisplay() {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <div className="w-full flex justify-center items-center flex-col">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Sorry no blog found right now!
            </h1>
            <Image src="/empty.svg" width={100} height={100} alt="empty" />

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              we are cooking something that will help your car along way
            </p>

            <Link href={"/"}>
              <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Keep Explore
              </button>
            </Link>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}