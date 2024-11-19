"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AllCarscard = ({ title, id }: { title: string; id: string }) => {
  const car = useQuery(api.cars.getCar);
  const allUser = useQuery(api.user.getAllUsers);
  return (
    <div>
      <Card className="cursor-pointer hover:shadow-black/40 transition-all hover:scale-105 duration-200 delay-200">
        <CardHeader className="!p-2 !px-4">
          <CardTitle className="text-base !px-0 text-stone-700 capitalize">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end w-full !p-1">
          {id === "car" &&
            (car ? (
              <p className="font-bold text-4xl ">{car?.length}</p>
            ) : (
              <Skeleton className="h-5 w-10 py-2 text-end" />
            ))}

          {id === "favorite" &&
            (car ? (
              <p className="font-bold text-4xl ">{car?.length}</p>
            ) : (
              <Skeleton className="h-5 w-10 py-2 text-end" />
            ))}

          {id === "user" &&
            (allUser ? (
              <p className="font-bold text-4xl ">{allUser?.length}</p>
            ) : (
              <Skeleton className="h-5 w-10 py-2 text-end" />
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AllCarscard;
