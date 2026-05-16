import { useState } from "react";
import { ToggleOpen } from "./ToggleOpen";

type Props = {
  maxPrice: number;
  minPrice: number;
  onPriceChange: (range: { min: number; max: number }) => void;
  paramMinValue: number;
  paramMaxValue: number;
  isPriceChanged?: boolean;
};

export const PriceRangeFilter = ({
  maxPrice,
  minPrice,
  onPriceChange,
  isPriceChanged,
  paramMinValue,
  paramMaxValue,
}: Props) => {
  const [minValue, setMinValue] = useState(paramMinValue || minPrice);
  const [maxValue, setMaxValue] = useState(paramMaxValue || maxPrice);

  const range = maxPrice - minPrice;

  const minPosition = ((minValue - minPrice) / range) * 100;
  const maxPosition = ((maxValue - minPrice) / range) * 100;

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 5);
    setMinValue(value);
    return onPriceChange({ min: value, max: maxValue });
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 5);
    setMaxValue(value);
    return onPriceChange({ min: minValue, max: value });
  };

  return (
    <ToggleOpen title="Price" isActive={isPriceChanged}>
      <div>
        <div className="relative h-2 bg-gray-300 rounded-md">
          <div
            className="absolute h-2 bg-black rounded-md"
            style={{
              left: `${minPosition}%`,
              width: `${maxPosition - minPosition}%`,
            }}
          />
        </div>

        <div className="relative">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step={10}
            value={minValue}
            onChange={handleMin}
            className="w-full absolute -top-4 appearance-none pointer-events-none accent-black"
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step={10}
            value={maxValue}
            onChange={handleMax}
            className="w-full absolute -top-4 appearance-none pointer-events-none accent-black"
          />
        </div>

        <div className="flex justify-evenly mt-5">
          <span className=" font-semibold text-gray-700">${minValue}</span>

          <span className=" font-semibold text-gray-700">${maxValue}</span>
        </div>
      </div>
    </ToggleOpen>
  );
};
