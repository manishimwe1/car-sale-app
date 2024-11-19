import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className=" bg-gray-50 px-6 w-full">
      <div className=" container mx-auto py-5">
        <h1 className="text-2xl  font-bold text-center ">
          Why Choose BetterWhips
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-5 md:mt-10">
          <div className="p-4 bg-sky flex flex-col items-center justify-center rounded-xl">
            <div className="h-28 w-32 relative">
              <Image src={"/auto.webp"} alt="auto" fill />
            </div>
            <p className=" font-bold text-center text-balance">
              Certified Used Cars Buy
            </p>
            <p className="text-center text-xs  text-stone-700 text-balance">
              {" "}
              used cars with trust and <br />
              transparency
            </p>
          </div>
          <div className="p-4 bg-[#c3e6ff] flex flex-col items-center justify-center rounded-xl">
            <div className="h-28 w-32 relative">
              <Image src={"/auto4.webp"} alt="auto" fill />
            </div>
            <p className=" font-bold text-center text-balance ">
              100 Inspection Points
            </p>
            <p className="text-center text-xs text-balance text-stone-700 ">
              {" "}
              All our cars have been checked
              <br /> thoroughly
            </p>
          </div>
          <div className="p-4 bg-[#c3e6ff] flex flex-col items-center justify-center rounded-xl">
            <div className="h-28 w-32 relative">
              <Image src={"/auto2.webp"} alt="auto" fill />
            </div>
            <p className=" font-bold text-center text-balance ">
              5 Days Refund Policy
            </p>
            <p className="text-center text-xs text-balance text-stone-700">
              {" "}
              You don’t like it, get refunded!
            </p>
          </div>
          <div className="p-4 bg-[#c3e6ff] flex flex-col items-center justify-center rounded-xl">
            <div className="h-28 w-32 relative">
              <Image src={"/auto3.webp"} alt="auto" fill />
            </div>
            <p className=" font-bold text-center text-balance ">
              6 months warranty
            </p>
            <p className="text-center text-xs text-balance text-stone-700">
              {" "}
              Engine, gearbox and powertrain,
              <br /> 6 months warranted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
