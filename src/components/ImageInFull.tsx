import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch } from "react";
import { carType } from "../../types";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const ImageInFull = ({
  OpenFull,
  setOpenFull,
  car,
}: {
  OpenFull: boolean;
  setOpenFull: Dispatch<React.SetStateAction<boolean>>;
  car: carType;
}) => {
  return (
    <Dialog open={OpenFull} onOpenChange={setOpenFull}>
      <DialogContent className="!min-w-full !bg-black/50 ">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <Button
          size={"icon"}
          className="absolute border cursor-pointer z-20 top-14 right-4"
          onClick={() => {
            setOpenFull(!OpenFull);
          }}
        >
          <X />
        </Button>
        <Carousel>
          <CarouselContent className=" rounded-xl flex ">
            {car ? (
              car.images.map((url) => {
                console.log(">>>>>>>>>>>>>", url);

                return (
                  <CarouselItem key={`${url}${new Date().getSeconds()}`}>
                    <div className="min-h-screen !w-full ">
                      <Image
                        src={url ?? ""}
                        alt="car"
                        fill
                        className="rounded-xl object-contain md:object-contain   aspect-square"
                      />
                    </div>
                  </CarouselItem>
                );
              })
            ) : (
              <Skeleton className="w-full h-[350px] lg:h-[500px] rounded-xl space-y-1 " />
            )}
          </CarouselContent>
          {car ? (
            <>
              <CarouselPrevious className="ml-[80px] hidden md:flex" />
              <CarouselNext className="mr-[80px] hidden md:flex" />
            </>
          ) : null}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default ImageInFull;
