import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

const Services = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="py-2 space-y-4 ">
      <h3 className="text-2xl  font-bold">Search by lifestyle</h3>

      <ScrollArea className="w-full  whitespace-nowrap ">
        <div className="flex w-full space-x-4 items-center justify-center">
          {data.map((_, i) => (
            <div
              className="flex cursor-pointer justify-center items-center"
              key={i}
            >
              <div className="relative h-[100px]  w-[160px] flex flex-col space-y-1">
                <Image src="/Electric.png" alt="car" fill />
                <p className="text-sm text-pretty absolute -bottom-1 inset-x-0 mt-2 font-medium text-center">
                  Green
                </p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default Services;
