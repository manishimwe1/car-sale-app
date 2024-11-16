import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

const SelectType = ({
  setType,
}: {
  setType: Dispatch<
    SetStateAction<"diesel" | "electric" | "hybrid" | undefined>
  >;
}) => {
  return (
    <Select
      onValueChange={(value) =>
        setType(value as "diesel" | "electric" | "hybrid")
      }
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Hybrid" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="diesel">Diesel</SelectItem>
        <SelectItem value="electric">Electric</SelectItem>
        <SelectItem value="hybrid">Hybrid</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectType;
