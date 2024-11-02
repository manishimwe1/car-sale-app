import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const SectionHeaderBox = ({
  title,
  subTitle,
  showNextBtn,
}: {
  title: string;
  subTitle: string;
  showNextBtn?: boolean;
}) => {
  return (
    <div className="md:flex text-center items-center justify-between">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl capitalize font-bold text-center md:text-left">
          {title}
        </h1>
        <p className="text-[14px] text-pretty font-medium text-slate-800">
          {subTitle}
        </p>
      </div>
      {showNextBtn ? (
        <Button variant={"link"} className="hidden md:flex">
          View all <MoveRight className="text-slate-800 w-4 ml-1 " />
        </Button>
      ) : null}
    </div>
  );
};

export default SectionHeaderBox;
