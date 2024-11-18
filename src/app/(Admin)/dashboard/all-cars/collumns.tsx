"use client";

import { ColumnDef } from "@tanstack/react-table";
import { carType } from "./page";
import { formatReadableDate } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useBearStore } from "@/lib/store/zustand";
import { Id } from "../../../../../convex/_generated/dataModel";

// Define a React component for the checkbox cell
const CheckboxCell = ({ id }: { id: Id<"cars"> }) => {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeId = useBearStore((state) => state.removeAllBears);

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
};

export const columns: ColumnDef<carType>[] = [
  {
    accessorKey: "",
    header: "Id",
    cell: ({ row }) => {
      const id = row.original._id;
      return <CheckboxCell id={id} />;
    },
  },
  {
    accessorKey: "name",
    header: () => <p className="text-xs ">Name</p>,
    cell: ({ row }) => (
      <p className="text-xs text-nowrap text-muted-foreground">
        {row.original.name}
      </p>
    ),
  },
  {
    accessorKey: "brand",
    header: () => <p className="text-xs ">Brand</p>,
    cell: ({ row }) => (
      <p className="text-xs text-nowrap text-muted-foreground">
        {row.original.brand}
      </p>
    ),
  },
  {
    accessorKey: "typeOfCar",
    header: () => <p className="text-xs ">Type of car</p>,
    cell: ({ row }) => (
      <p className="text-xs text-nowrap text-muted-foreground">
        {row.original.typeOfCar}
      </p>
    ),
  },
  {
    accessorKey: "createAt",
    header: () => <p className="text-xs ">Date</p>,
    cell: ({ row }) => {
      const date = row.original._creationTime;
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
      return (
        <Avatar className="h-5 w-5">
          <AvatarImage src={logo ?? ""} className="object-contain" />
        </Avatar>
      );
    },
  },
];
