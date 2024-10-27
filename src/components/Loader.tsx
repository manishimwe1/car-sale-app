import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
};

export default Loader;
