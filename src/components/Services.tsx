import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

const Services = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="space-y-4 pt-28 ">
      <h3 className="text-2xl  font-bold text-center ">Search by categories</h3>
      <p className="text-muted-foreground text-center">
        Search car by their body type
      </p>
      <ScrollArea className="w-full  whitespace-nowrap ">
        <div className="flex w-full space-x-4 items-center justify-center">
          {data.map((_, i) => (
            <div
              className="flex cursor-pointer justify-center items-center"
              key={i}
            >
              <div className="relative h-[110px]  w-[160px] flex flex-col space-y-1">
                <Image src="/Electric.png" alt="car" fill />
                <p className="text-sm text-pretty absolute -bottom-0 inset-x-0 mt-2 font-medium text-center">
                  Green
                </p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-5 pt-10">
        <p className="text-muted-foreground text-center">
          Search car by brands
        </p>

        <div className="flex flex-wrap w-full gap-1 overflow-hidden md:gap-3 space-x-4 items-center justify-center mt-2">
          <div className="flex flex-col space-y-2 gap-1 rounded-md cursor-pointer px-4 py-0 hover:border-2 border-blue-700 justify-center items-center">
            <Image src="/brand.webp" alt="car brand" width={40} height={40} />
            <p className="text-sm text-pretty font-medium text-center">
              Leapmotor
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-md cursor-pointer px-4 py-0 hover:border-2 border-blue-700 justify-center items-center">
            <Image src="/brand2.webp" alt="car brand" width={40} height={40} />
            <p className="text-sm text-pretty font-medium text-center">
              Mercedes Benz
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-md cursor-pointer px-4 py-0 hover:border-2 border-blue-700 justify-center items-center">
            <Image src="/brand3.webp" alt="car brand" width={40} height={40} />
            <p className="text-sm text-pretty font-medium text-center">Vw</p>
          </div>
          <div className="flex flex-col gap-1 rounded-md cursor-pointer px-4 py-0 hover:border-2 border-blue-700 justify-center items-center">
            <Image src="/brand4.webp" alt="car brand" width={40} height={40} />
            <p className="text-sm text-pretty font-medium text-center">
              Toyota
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-md cursor-pointer px-4 py-0 hover:border-2 border-blue-700 justify-center items-center">
            <Image src="/brand1.webp" alt="car brand" width={40} height={40} />
            <p className="text-sm text-pretty font-medium text-center">
              Hyundai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
