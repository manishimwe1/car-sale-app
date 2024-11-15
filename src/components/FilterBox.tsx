"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { ChevronDown } from "lucide-react";
import { api } from "../../convex/_generated/api";
import { Slider } from "@/components/ui/slider";

const FilterBox = ({ category }: { category: string }) => {
  const cars = useQuery(api.cars.getCar);
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="py-2 border px-2 w-full rounded-md">
        <DropdownMenu>
          <DropdownMenuTrigger className=" !w-full flex items-center justify-between text-slate-500">
            {category}
            <ChevronDown className="text-slate-400 h-8 w-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!w-full border-red-700 focus:border-none focus:outline-none focus-visible:border-none outline-none focus-visible:outline-none">
            {cars ? (
              cars.map((car) => (
                <DropdownMenuItem
                  key={car._id}
                  className="flex items-center justify-between !w-full"
                >
                  {car.brand}
                </DropdownMenuItem>
              ))
            ) : (
              <div className="flex flex-col gap-2 w-full py-3 ">
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="py-2 border px-2 w-full rounded-md">
        <DropdownMenu>
          <DropdownMenuTrigger className=" !w-full flex items-center justify-between text-slate-500">
            Model
            <ChevronDown className="text-slate-400 h-8 w-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!w-full focus:border-none focus:outline-none focus-visible:border-none outline-none focus-visible:outline-none">
            {cars ? (
              cars.map((car) => (
                <DropdownMenuItem
                  key={car._id}
                  className="flex items-center justify-between !w-full"
                >
                  {car.brand}
                </DropdownMenuItem>
              ))
            ) : (
              <div className="flex flex-col gap-2 w-full py-3">
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="py-2 border px-2 w-full rounded-md">
        <DropdownMenu>
          <DropdownMenuTrigger className=" !w-full flex items-center justify-between text-slate-500">
            Milleage
            <ChevronDown className="text-slate-400 h-8 w-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!w-full py-4">
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              className="text-blue-500"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FilterBox;
