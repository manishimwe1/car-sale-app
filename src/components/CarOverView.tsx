import { Features } from "@/constants";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const CarOverView = () => {
  return (
    <div className="w-full container py-10">
      <div className="flex items-center py-2 justify-center">
        <hr className=" border-4 w-16  border-blue-600" />
        <hr className=" border-4 w-16  border-black" />
      </div>
      <h1 className="text-4xl  font-bold text-center ">Car Overview</h1>

      <div className="mt-12 flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full overflow-hidden ">
          <iframe
            className="rounded-xl h-[300px] lg:h-[400px] w-full lg:w-[660px]"
            src="https://www.youtube.com/embed/RcLbJZHHJho?si=mJp4OHZIAQkHFY3T"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="flex flex-wrap gap-3 ;g:w-[72%] w-full  items-start justify-start">
          {Features.map((feature) => (
            <div
              key={feature}
              className="flex gap-1 items-center rounded-lg justify-between bg-slate-50 h-fit w-fit p-2 px-4"
            >
              <p>{feature}</p>
              <CheckCircledIcon className="text-green-500 h-5 w-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarOverView;
