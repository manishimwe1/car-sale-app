import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const SectionHeaderBox = ({
  title,
  subTitle,
  showNextBtn,
  link,
}: {
  title: string;
  subTitle: string;
  showNextBtn?: boolean;
  link?: string;
}) => {
  return (
    <div className="md:flex text-center items-center justify-between px-2">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl capitalize font-bold text-center md:text-left">
          {title}
        </h1>
        <p className="text-[14px] text-pretty font-medium text-slate-800">
          {subTitle}
        </p>
      </div>
      {showNextBtn ? (
        <Link href={link ?? ""}>
          <Button variant={"link"} className="hidden md:flex">
            View all <MoveRight className="text-slate-800 w-4 ml-1 " />
          </Button>
        </Link>
      ) : null}
    </div>
  );
};

export default SectionHeaderBox;
