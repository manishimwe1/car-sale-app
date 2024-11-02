import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SectionHeaderBox from "./SectionHeaderBox";

const CustomersReviews = () => {
  const items = [
    {
      quote: "this is a cool car",
      name: "jeane",
      title: "cars is awesome",
    },
  ];
  return (
    <section className=" items-center justify-center flex flex-col gap-4">
      <SectionHeaderBox
        title="Happy customers, Happy us"
        subTitle="You can trust us like these happy clients! Check our reviews!"
      />
      <InfiniteMovingCards items={items} className="" />
    </section>
  );
};

export default CustomersReviews;
