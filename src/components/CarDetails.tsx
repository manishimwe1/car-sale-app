"use client";

import { Cable, Car, Clock12, Fuel, Vault } from "lucide-react";

type carDetailsType = {
  brand: string;
  typeOfCar: string;
  KM_Done: number;
};

export const CarDetails = ({ car }: { car: carDetailsType }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 text-gray-600 text-sm">
      <span className="flex items-center gap-1">
        <Car className="h-4 w-4" />
        {car.brand}
      </span>
      <span className="flex items-center gap-1">
        {car.typeOfCar === "electric" && <Cable className="h-4 w-4" />}
        {car.typeOfCar === "diesel" && <Fuel className="h-4 w-4" />}
        {car.typeOfCar === "hybrid" && <Vault className="h-4 w-4" />}
        {car.typeOfCar}
      </span>
      <span className="flex items-center gap-1">
        <Clock12 className="h-4 w-4" />
        {car.KM_Done} KM
      </span>
    </div>
  );
};
