"use client";

import { ColumnDef } from "@tanstack/react-table";
import { carType } from "./page";
import { formatReadableDate } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useBearStore } from "@/lib/store/zustand";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const columns: ColumnDef<carType>[] = [
  {
    accessorKey: "",
    header: "Id",
    cell: ({ row }) => {
      console.log();
      const increasePopulation = useBearStore(
        (state) => state.increasePopulation
      );
      const removeId = useBearStore((state) => state.removeAllBears);
      const id = row.original._id;
      return (
        <Checkbox
          onCheckedChange={(checked) => {
            if (checked) {
              increasePopulation(id);
            } else {
              removeId(id);
            }
          }}
        />
      );
    },
  },
  // {
  //   accessorKey: "status",
  //   header: "Id",
  // },
  {
    accessorKey: "name",
    header: () => <p className="text-xs ">Name</p>,
    cell: ({ row }) => {
      return (
        <p className="text-xs text-nowrap text-muted-foreground">
          {row.original.name}
        </p>
      );
    },
  },

  {
    accessorKey: "brand",
    header: () => <p className="text-xs ">Brand</p>,
    cell: ({ row }) => {
      return (
        <p className="text-xs text-nowrap text-muted-foreground">
          {row.original.brand}
        </p>
      );
    },
  },
  {
    accessorKey: "typeOfCar",
    header: () => <p className="text-xs ">Type of car</p>,
    cell: ({ row }) => {
      return (
        <p className="text-xs text-nowrap text-muted-foreground">
          {row.original.typeOfCar}
        </p>
      );
    },
  },
  {
    accessorKey: "createAt",
    header: () => <p className="text-xs ">Date</p>,
    cell: ({ row }) => {
      const date = row.original._creationTime;
      console.log();

      return (
        <p className="text-xs text-nowrap text-muted-foreground">
          {formatReadableDate(date)}
        </p>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.original.money.toLocaleString();

      console.log();

      return (
        <p className="text-xs text-nowrap text-muted-foreground">
          {amount} Rwf
        </p>
      );
    },
  },
  {
    accessorKey: "logoUrls",
    header: "Logo",
    cell: ({ row }) => {
      const logo = row.original.logoUrls;

      console.log();

      return (
        <Avatar className="h-5 w-5 ">
          <AvatarImage src={logo ?? ""} className="object-contain " />
        </Avatar>
      );
    },
  },
];
