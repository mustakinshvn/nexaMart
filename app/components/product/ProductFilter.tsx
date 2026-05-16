"use client";

import { SlidersVertical, XIcon } from "lucide-react";
import { ColorFilter } from "../ui/ColorFilter";
import { SizeFilter } from "../ui/SizeFilter";
import { DressStyleFilter } from "../ui/DressStyleFilter";
import { Button } from "../ui/Button";
import { CategoryFilter } from "../ui/CategoryFilter";
import { cn } from "@/app/lib/utils";
import { PriceRangeFilter } from "../ui/PriceRangeFilter";
import { ProductFilterType } from "@/app/type/ProductFilterType";
import { FilterProductDropDown } from "./FilterDropDown";

export const ProductFilter = ({
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  className,
  onClick,
  disabled,
  isPending,
  selectedColors,
  selectedSizes,
  onPriceChange,
  setSelectedColors,
  setSelectedSizes,
  isPriceChanged,
  maxPrice,
  minPrice,
  paramMinPriceValue,
  paramMaxPriceValue,
}: ProductFilterType) => {
  return (
    <div
      className={cn(
        " w-full  border border-gray-200 rounded-lg p-6 h-fit  z-1",
        className,
      )}
    >
      <div className="flex justify-between items-center  w-full py-5 ">
        <h1 className="text-xl font-semibold">Filters</h1>
        <button onClick={() => setIsMobileFilterOpen((prev) => !prev)}>
          {isMobileFilterOpen ? (
            <XIcon
              size={22}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            />
          ) : (
            <SlidersVertical
              size={22}
              className="text-gray-400 hover:text-gray-600 md:hover:text-gray-400 cursor-pointer"
            />
          )}
        </button>
      </div>

      <div className=" flex flex-col gap-5 border-t border-gray-200 pt-5 mb-5 ">
        <FilterProductDropDown className="md:hidden" />
        <CategoryFilter />
        <PriceRangeFilter
          maxPrice={maxPrice}
          minPrice={minPrice}
          onPriceChange={(range) => {
            onPriceChange(range);
          }}
          isPriceChanged={isPriceChanged}
          paramMinValue={paramMinPriceValue}
          paramMaxValue={paramMaxPriceValue}
        />
        <ColorFilter
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          isActive={selectedColors.length > 0}
        />
        <SizeFilter
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
          isActive={selectedSizes.length > 0}
        />
        <DressStyleFilter />
      </div>
      <Button
        disabled={disabled}
        label={isPending ? "Applying Filters..." : "Apply Filters"}
        className="w-full   disabled:cursor-not-allowed disabled:hover:bg-black"
        onClick={onClick}
      />
    </div>
  );
};
