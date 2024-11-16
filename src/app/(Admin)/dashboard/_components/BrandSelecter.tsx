import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "convex/react";
import { Dispatch, SetStateAction, useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import { PlusCircleIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
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
import { Input } from "@/components/ui/input";

const BrandSelecter = ({
  setBrand,
}: {
  setBrand: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const [value, setValue] = useState("");
  const [brandName, setBrandName] = useState<string | undefined>();
  const cars = useQuery(api.cars.getCar);
  if (cars === undefined) return;

  return (
    <Select onValueChange={() => setBrand(brandName ? brandName : value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={cars[0].brand} />
      </SelectTrigger>
      <SelectContent>
        {cars ? (
          cars.map((car) => (
            <SelectItem
              value={car.brand}
              key={car._id}
              className="capitalize cursor-pointer text-stone-700"
            >
              {car.brand}
            </SelectItem>
          ))
        ) : (
          <SelectItem value="">
            <Skeleton className="h-4 w-full" />
          </SelectItem>
        )}
        {brandName && (
          <SelectItem
            className="cursor-pointer hover:bg-slate-800"
            value={brandName}
          >
            {brandName}
          </SelectItem>
        )}
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="!flex items-center px-4 cursor-pointer py-2 text-center justify-center gap-2 w-full">
              <PlusCircleIcon className="h-4 w-4 " /> <span>Add new brand</span>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Your new brand</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  className="w-full !text-black"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  setBrandName(value);
                  setValue("");
                }}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default BrandSelecter;
