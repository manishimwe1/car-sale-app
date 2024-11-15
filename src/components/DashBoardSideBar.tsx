"use client";
import { ArrowUpAZ, Heart, LayoutDashboard, PackagePlus } from "lucide-react";
import Link from "next/link";

const DashBoardSideBar = () => {
  return (
    <section className=" w-full md:w-52 border-r-2 absolute bottom-0 inset-0 border-white/10 px-2 flex justify-center items-center lg:pt-20">
      <nav className="flex md:flex-col w-full md:h-full md:gap-4 py-10 items-center  md:items-start md:justify-start justify-between px-8 md:px-3 ">
        <Link
          href={"/dashboard"}
          className="flex text-center md:flex-col md:justify-start w-fit md:w-full justify-between"
        >
          <ul className=" py-2 w-fit md:!w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <LayoutDashboard className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Dashboard</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/all-cars"}
          className="flex text-center md:flex-col justify-start w-fit md:w-full"
        >
          <ul className=" py-2 w-fit md:w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <ArrowUpAZ className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> All cars</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/create"}
          className="flex text-center md:flex-col md:justify-start w-fit md:w-full justify-between"
        >
          <ul className=" py-2 w-fit md:w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <PackagePlus className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Create new</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/favorite"}
          className="flex text-center md:flex-col md:justify-start w-fit md:w-full justify-between"
        >
          <ul className=" py-2 w-fit md:w-full rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <Heart className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Favorite</p>
            </li>
          </ul>
        </Link>
      </nav>
    </section>
  );
};

export default DashBoardSideBar;
