import Image from "next/image";
import React from "react";

const AboutUs = ({
  data,
}: {
  data: {
    title: string;
    subTitle: string;
    imageUrl: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-2  items-center">
      <Image src={data.imageUrl} alt="moneyback" width={40} height={40} />
      <h4 className="font-semibold">{data.title}</h4>
      <p className="text-pretty text-stone-700 text-center">{data.subTitle}</p>
    </div>
  );
};

export default AboutUs;
