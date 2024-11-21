import React from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";
import { FilterProps } from "./Filter";

const FilterPart: React.FC<FilterProps> = ({
  totalProducts,
  currentPage,
  pageSize,
}) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return (
    <div className="flex items-center gap-7 max-xs:flex-col max-xs:items-start">
      <div className="flex items-center">
        <div className="flex items-center gap-6 max-sm:gap-4">
          <div className="flex items-center gap-3 max-sm:gap-1.5">
            <SvgIcon
              name="filtering"
              className="w-6 h-6 max-sm:w-5 max-sm:h-5"
            />
            <p className="font-normal capitalize text-xl max-sm:text-base">
              filter
            </p>
          </div>
          <SvgIcon
            name="grid-big-round"
            className="w-7 h-7 max-sm:w-6 max-sm:h-6"
          />
          <SvgIcon name="view-list" className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
        </div>
      </div>
      <p className="border-l-2 border-gray-200 pl-8 font-normal max-sm:text-sm max-sm:pl-4">
        Showing {startIndex + 1} - {endIndex} of {totalProducts} results
      </p>
    </div>
  );
};

export default FilterPart;
