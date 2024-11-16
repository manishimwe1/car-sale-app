"use client";

import { ColumnDef } from "@tanstack/react-table";
import { carType } from "./page";
import { formatReadableDate } from "@/lib/utils";

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
    accessorKey: "status",
    header: "Status",
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
  },
];
