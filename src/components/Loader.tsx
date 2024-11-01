import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <Skeleton className="w-full h-[200px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  );
};

export default Loader;
