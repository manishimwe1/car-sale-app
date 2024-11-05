import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

const SearchBox = () => {
  return (
    <form className="ml-auto flex-1 sm:flex-initial ">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-950" />
        <Input
          type="search"
          placeholder="Search car..."
          className="pl-8 sm:w-[300px] md:w-[200px] text-blue-950 lg:w-[300px] placeholder:text-black/50"
        />
      </div>
    </form>
  );
};

export default SearchBox;
