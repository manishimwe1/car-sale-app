"use client";

import { useQuery } from "convex/react";
import { Loader2 } from "lucide-react";
import { api } from "../../../../../convex/_generated/api";
import { DataTable } from "./data-table";
import { columns } from "./collumns";
import { Id } from "../../../../../convex/_generated/dataModel";

export type carType = {
  urls: (string | null)[];
  logoUrls: string | null;
  _id: Id<"cars">;
  _creationTime: number;
  name: string;
  brand: string;
  money: number;
  KM_Done: number;
  typeOfCar: string;
  logoId: Id<"_storage">;
  imageIds: Id<"_storage">[];
  numberOfViews: number;
};

const AllCarPage = () => {
  const cars: carType[] | undefined = useQuery(api.cars.getCar);

  return (
    <section className="flex mx-auto items-start justify-center w-full px-6 pt-10 pb-20">
      {cars ? (
        // cars.map((car) => <AllCarscard car={car} key={car._id} />)
        <div className="w-full h-full">
          <DataTable columns={columns} data={cars} />
        </div>
      ) : (
        <Loader2 className="animate-spin h-4 w-4" />
      )}
    </section>
  );
};

export default AllCarPage;
