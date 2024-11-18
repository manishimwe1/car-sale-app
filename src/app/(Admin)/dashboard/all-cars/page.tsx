"use client";

import { useMutation, useQuery } from "convex/react";
import { Loader2, Trash } from "lucide-react";
import { api } from "../../../../../convex/_generated/api";
import { DataTable } from "./data-table";
import { columns } from "./collumns";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useBearStore } from "@/lib/store/zustand";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const deleteUi = useBearStore((state) => state.carsId);
  const deleteId = useBearStore((state) => state.removeAll);
  console.log(deleteUi);
  const deleteAction = useMutation(api.cars.deleteCar);

  return (
    <section className="flex flex-col gap-3 mx-auto items-start justify-center w-full px-6 pt-10 pb-20">
      <div className="w-full flex items-center justify-end transition-all ">
        {deleteUi.length > 0 && (
          <div className="flex items-center justify-center gap-2">
            <Button variant={"secondary"} asChild>
              <Link href={`/dashboard/edit/${deleteUi[0]}`}>Edit</Link>
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"destructive"}>Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-500 hover:bg-red-700"
                    onClick={() => {
                      deleteUi.map(async (carId) => {
                        await deleteAction({ id: carId });
                      });
                      deleteId();
                    }}
                  >
                    <Trash className="h-4 w-4" />
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </div>
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
