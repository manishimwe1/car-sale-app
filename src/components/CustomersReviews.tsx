import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SectionHeaderBox from "./SectionHeaderBox";

const CustomersReviews = () => {
  const items = [
    {
      quote:
        "I recently purchased a car from BetterWhips, and the whole process was seamless. The team was very professional, and the car was exactly as advertised. I felt confident in my purchase, and the customer service was top-notch! Highly recommend BetterWhips to anyone looking for a quality vehicle!",
      name: "Satisfied Customer",
      title: "Smooth, Professional Experience",
    },
    {
      quote:
        "The car I bought exceeded my expectations! It was in pristine condition, and I could tell BetterWhips takes pride in selecting only the best vehicles. The staff went above and beyond to ensure I was satisfied and understood all the details of my purchase. Amazing service!",
      name: "Happy Buyer",
      title: "Top-Notch Quality and Service",
    },
    {
      quote:
        "BetterWhips made my dream of owning a high-end vehicle come true. The team made sure every detail was perfect, and they even helped me with after-sales services. I felt like I was getting a VIP treatment, and the car itself runs beautifully. Can’t recommend them enough!",
      name: "Luxury Enthusiast",
      title: "Luxury Cars with a Luxury Experience",
    },
    {
      quote:
        "I've bought cars from different dealerships, but BetterWhips stands out. Their cars are in fantastic condition, and the customer service is friendly and informative. They really care about helping you find the right car, not just making a sale. I’ll definitely come back for my next vehicle!",
      name: "Loyal Customer",
      title: "Unmatched Quality and Customer Care",
    },
    {
      quote:
        "BetterWhips offered a level of quality and professionalism I haven’t seen elsewhere. From the detailed information on each car to the friendly customer service, it’s clear they value their customers. I love my new car and will be recommending BetterWhips to friends and family!",
      name: "Proud Owner",
      title: "Highly Recommend for Anyone Seeking Quality and Professionalism",
    },
  ];

  return (
    <section className=" items-center justify-center flex flex-col gap-4">
      <SectionHeaderBox
        title="Happy customers, Happy us"
        subTitle="You can trust us like these happy clients! Check our reviews!"
      />
      <InfiniteMovingCards items={items} direction="right" speed="slow" />
    </section>
  );
};

export default CustomersReviews;
