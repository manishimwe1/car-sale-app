import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

const SelectType = ({
  typeOfCar,
  setType,
}: {
  typeOfCar: "diesel" | "electric" | "hybrid" | undefined;
  setType: Dispatch<
    SetStateAction<"diesel" | "electric" | "hybrid" | undefined>
  >;
}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={"Hybrid"} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="diesel" onChange={() => setType("diesel")}>
          Diesel
        </SelectItem>
        <SelectItem value="electric" onChange={() => setType("electric")}>
          Electric
        </SelectItem>
        <SelectItem value="hybrid" onChange={() => setType("hybrid")}>
          Hybrid
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectType;
