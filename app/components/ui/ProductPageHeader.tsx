"use client";

import { SlidersVertical, XIcon } from "lucide-react";
import { Dispatch } from "react";
import { FilterProductDropDown } from "../product/FilterDropDown";

type Props = {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: Dispatch<React.SetStateAction<boolean>>;
  startIndex: number;
  endIndex: number;
};

export const ProductPageHeader = ({
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  startIndex,
  endIndex,
}: Props) => {
  return (
    <div className="max-w-full flex justify-evenly md:justify-between items-center px-2 sm:px-15 lg:px-20 xl:px-15 ">
      <h1 className=" text-lg md:text-3xl font-bold">Casual</h1>
      <div className="flex items-center justify-center gap-2">
        <div className="text-xs sm:text-sm text-nowrap text-gray-500 flex items-center gap-1">
          <h1>Showing {startIndex}</h1>
          {endIndex > 0 && <h1> - {endIndex} </h1>}
          Products
        </div>
        <div className=" hidden md:flex gap-2 items-center text-nowrap text-gray-500">
          <h1 className="text-sm">Sort by:</h1>
          <FilterProductDropDown />
        </div>
      </div>
      <button
        onClick={() => setIsMobileFilterOpen((prev) => !prev)}
        className="md:hidden"
      >
        {isMobileFilterOpen ? (
          <XIcon
            size={18}
            className="text-gray-900 hover:text-gray-700 cursor-pointer"
          />
        ) : (
          <SlidersVertical
            size={18}
            className="text-gray-900 hover:text-gray-700 cursor-pointer"
          />
        )}
      </button>
    </div>
  );
};
