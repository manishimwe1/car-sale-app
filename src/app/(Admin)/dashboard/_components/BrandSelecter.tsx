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
  const [customBrand, setCustomBrand] = useState<string | undefined>();
  const cars = useQuery(api.cars.getCar);

  // Determine the placeholder value
  const placeholder = customBrand || (cars?.[0]?.brand ?? "Select a brand");

  return (
    <Select onValueChange={(value) => setBrand(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {cars && cars.length > 0 ? (
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
          <SelectItem value="loading" disabled>
            <Skeleton className="h-4 w-full" />
          </SelectItem>
        )}
        {customBrand && (
          <SelectItem
            value={customBrand}
            className="cursor-pointer hover:bg-slate-800"
          >
            {customBrand}
          </SelectItem>
        )}
        <AlertDialogComponent setCustomBrand={setCustomBrand} />
      </SelectContent>
    </Select>
  );
};

export default BrandSelecter;

const AlertDialogComponent = ({
  setCustomBrand,
}: {
  setCustomBrand: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const [value, setValue] = useState("");

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="!flex items-center px-4 cursor-pointer py-2 text-center justify-center gap-2 w-full">
          <PlusCircleIcon className="h-4 w-4" />
          <span>Add new brand</span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add a New Brand</AlertDialogTitle>
          <AlertDialogDescription>
            <Input
              className="w-full !text-black"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter brand name"
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              if (value.trim() !== "") {
                setCustomBrand(value);
                setValue("");
              }
            }}
          >
            Add Brand
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
