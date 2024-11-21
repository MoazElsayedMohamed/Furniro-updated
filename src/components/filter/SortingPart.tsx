import React from "react";
import { FilterProps } from "./Filter";

const SortingPart: React.FC<FilterProps> = ({ setPageSize }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize?.(Number(event.target.value));
  };
  return (
    <div className="flex items-center gap-4 lg:justify-self-end max-xs:flex-col max-xs:items-start">
      <div className="flex items-center sm:gap-4 max-sm:gap-2">
        <p className="capitalize text-xl font-normal max-md:text-base">show</p>
        <input
          type="text"
          placeholder="16"
          className="py-6 max-md:py-3 max-md:text-base w-16 max-md:w-10 text-xl placeholder:text-gray-200 text-center outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center sm:gap-4 max-sm:gap-2">
        <p className="text-xl font-normal max-md:text-base">Sort by</p>
        <input
          type="text"
          placeholder="Default"
          className=" py-6 text-xl placeholder:text-gray-200 pl-4 outline-none max-md:py-3 max-md:text-base max-sm:w-3/4"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SortingPart;
