import { Dispatch } from "react";

export type ProductFilterType = {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: Dispatch<React.SetStateAction<boolean>>;
  setIsFilterApplied?: (isApplied: boolean) => void;
  className?: string;
  disabled: boolean;
  isPending: boolean;
  onClick: () => void;
  selectedColors: number[];
  selectedSizes: number[];
  setSelectedColors: (colors: number[]) => void;
  setSelectedSizes: (sizes: number[]) => void;
  onPriceChange: (range: { min: number; max: number }) => void;
  isPriceChanged: boolean;
  maxPrice: number;
  minPrice: number;
  paramMinPriceValue: number;
  paramMaxPriceValue: number;
};