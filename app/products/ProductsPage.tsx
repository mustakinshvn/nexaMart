"use client";

import { Pagination } from "../components/product/Pagination";
import { ShowAllProducts } from "../components/product/ShowAllProducts";
import { Suspense, useState, useTransition } from "react";
import { ProductPageHeader } from "../components/ui/ProductPageHeader";
import { ProductFilter } from "../components/product/ProductFilter";
import { cn } from "../lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductPropsWithVariant } from "../type/Product";

type ProductsPageProps = {
  currentPage: number;
  currentProducts: ProductPropsWithVariant[];
  onClick?: () => void;
  maxPrice: number;
  minPrice: number;
  filteredProducts?: ProductPropsWithVariant[];
  colorParams: number[];
  sizeParams: number[];
  priceMinParam?: number;
  priceMaxParam?: number;
};

export const ProductsPage = ({
  currentPage,
  currentProducts,
  maxPrice,
  minPrice,
  filteredProducts,
  colorParams,
  sizeParams,
  priceMinParam,
  priceMaxParam,
}: ProductsPageProps) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number;
    max: number;
  }>({
    min: Number(priceMinParam) || minPrice,
    max: Number(priceMaxParam) || maxPrice,
  });
  const [selectedColors, setSelectedColors] = useState<number[]>(
    colorParams && colorParams[0] == 0 ? [] : colorParams,
  );
  const [selectedSizes, setSelectedSizes] = useState<number[]>(
    sizeParams[0] == 0 ? [] : sizeParams,
  );

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterClick = async () => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("color");
      params.delete("size");
      params.delete("priceMin");
      params.delete("priceMax");

      if (selectedColors.length > 0) {
        params.set("color", seperatedByCommas(selectedColors));
      }
      if (selectedSizes.length > 0) {
        params.set("size", seperatedByCommas(selectedSizes));
      }

      if (
        selectedPriceRange.min > minPrice ||
        selectedPriceRange.max < maxPrice
      ) {
        params.append("priceMin", selectedPriceRange.min.toString());
        params.append("priceMax", selectedPriceRange.max.toString());
      }

      router.push(`/products?${params.toString()}`);
    });
  };

  const checkDisabled = () => {
    return (
      selectedColors.length === 0 &&
      colorParams.length === 1 &&
      selectedSizes.length === 0 &&
      sizeParams.length === 1 &&
      selectedPriceRange.min === minPrice &&
      selectedPriceRange.max === maxPrice
    );
  };

  const isPriceChanged = () => {
    if (!selectedPriceRange.min && !selectedPriceRange.max) {
      return false;
    }
    return (
      selectedPriceRange.min > minPrice || selectedPriceRange.max < maxPrice
    );
  };

  const activeProducts = filteredProducts ?? currentProducts;
  const ITEMS_PER_PAGE = 6;
  const totalPages =
    activeProducts.length > 1
      ? Math.ceil(activeProducts.length / ITEMS_PER_PAGE)
      : 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const products = activeProducts.slice(startIndex, endIndex);
  const activeProductLength = activeProducts.length;

  const [isPending, startTransition] = useTransition();

  return (
    <div className="relative flex w-full  h-full ">
      <div className=" w-full flex gap-5">
        <ProductFilter
          isMobileFilterOpen={isMobileFilterOpen}
          setIsMobileFilterOpen={setIsMobileFilterOpen}
          className={cn(
            isMobileFilterOpen
              ? "block absolute  bg-white z-10 top-0 left-0 h-full w-full p-6 overflow-y-auto "
              : "hidden md:block md:w-3/9 lg:w-2/7",
          )}
          onClick={handleFilterClick}
          isPending={isPending}
          disabled={checkDisabled()}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
          onPriceChange={(range) => {
            setSelectedPriceRange(range);
          }}
          maxPrice={maxPrice}
          minPrice={minPrice}
          isPriceChanged={isPriceChanged()}
          paramMinPriceValue={Number(priceMinParam) || minPrice}
          paramMaxPriceValue={Number(priceMaxParam) || maxPrice}
        />

        <div
          className={cn(
            "w-full md:w-6/9 lg:w-6/7 flex flex-col gap-4",
            isMobileFilterOpen && "md:w-full lg:w-full",
            !activeProductLength && "gap-15",
          )}
        >
          <ProductPageHeader
            isMobileFilterOpen={isMobileFilterOpen}
            setIsMobileFilterOpen={setIsMobileFilterOpen}
            startIndex={
              activeProductLength ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0
            }
            endIndex={Math.min(
              currentPage * ITEMS_PER_PAGE,
              activeProductLength,
            )}
          />
          <Suspense fallback={<div>Loading products...</div>}>
            <ShowAllProducts
              currentProducts={
                isMobileFilterOpen
                  ? products.slice(startIndex, startIndex + 1)
                  : products
              }
              className="sm:w-74 md:w-58 lg:w-80"
            />
          </Suspense>

          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

const seperatedByCommas = (arr: number[]) => {
  return arr.join(",");
};
