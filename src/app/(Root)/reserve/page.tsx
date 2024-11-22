"use client";

import { useReserveStore } from "@/lib/store/zustand";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ReservePage = () => {
  const data = useReserveStore((state) => state.data);
  console.log(data);

  return (
    <section>
      <div>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </section>
  );
};

export default ReservePage;
