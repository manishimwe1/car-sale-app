"use client";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import {
  ArrowUpAZ,
  Heart,
  LayoutDashboard,
  Loader2,
  PackagePlus,
} from "lucide-react";

const DashBoardSideBar = () => {
  return (
    <section className="h-screen w-fit md:w-40 border-r-2 border-white/10 px-2  ">
      <nav className="flex flex-col w-full gap-4 py-10 items-center justify-center">
        <Link
          href={"/dashboard"}
          className="flex text-center flex-col justify-start  w-full"
        >
          <ul className=" py-2 w-fit md:w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <LayoutDashboard className="h-4 w-4 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Dashboard</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/all-cars"}
          className="flex text-center flex-col justify-start  w-full"
        >
          <ul className=" py-2 w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <ArrowUpAZ className="h-4 w-4 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> All cars</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/create"}
          className="flex text-center flex-col justify-start  w-full"
        >
          <ul className=" py-2 w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <PackagePlus className="h-4 w-4 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Create new</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/favorite"}
          className="flex text-center flex-col justify-start  w-full"
        >
          <ul className=" py-2 w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <Heart className="h-4 w-4 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Favorite</p>
            </li>
          </ul>
        </Link>
      </nav>
    </section>
  );
};

export default DashBoardSideBar;
