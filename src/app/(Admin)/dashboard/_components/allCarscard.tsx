import React from "react";
import { Doc } from "../../../../../convex/_generated/dataModel";

const AllCarscard = ({ car }: { car: Doc<"cars"> }) => {
  console.log(car);

  return <div>AllCarscard</div>;
};

export default AllCarscard;
