"use client";
import {
  ArrowUpAZ,
  Heart,
  LayoutDashboard,
  PackagePlus,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const DashBoardSideBar = () => {
  return (
    <section className=" md:w-full h-full border border-green-400 border-r-2 bottom-0 inset-0 border-white/10 px-2 flex justify-center items-center ">
      <nav className="flex md:flex-col w-full md:h-full md:gap-4 gap-8 py-10 items-center  md:items-start md:justify-start justify-between px-8 md:px-3 ">
        <Link
          href={"/dashboard"}
          className="flex text-center md:flex-col md:justify-start w-full  justify-between"
        >
          <ul className=" py-2 w-full  rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-center md:justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <LayoutDashboard className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Dashboard</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/all-cars"}
          className="flex text-center md:flex-col justify-start w-full "
        >
          <ul className=" py-2 w-full   rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center justify-center px-4 md:justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <ArrowUpAZ className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> All cars</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/create"}
          className="flex text-center md:flex-col md:justify-start w-full  justify-between"
        >
          <ul className=" py-2 w-full  rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-center md:justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <PackagePlus className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Create new</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/sales"}
          className="md:flex text-center md:flex-col md:justify-start w-full  justify-between hidden "
        >
          <ul className=" py-2 w-full  rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-center md:justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
              <Sparkles className="md:h-4 md:w-4 w-5 h-5 text-slate-400 group-hover:text-sky" />{" "}
              <p className="text-sm font-normal hidden md:flex"> Sales</p>
            </li>
          </ul>
        </Link>
        <Link
          href={"/dashboard/favorite"}
          className="flex text-center md:flex-col md:justify-start w-full  justify-between"
        >
          <ul className=" py-2 w-full  rounded-md shadow-sm shadow-sky group">
            <li className="text-center flex items-center px-4 justify-center md:justify-start gap-1 group-hover:underline  w-full capitalize text-base font-normal text-nowrap">
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
