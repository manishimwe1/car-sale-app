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
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-stone-700 capitalize">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end w-full">
          {id === "car" &&
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
