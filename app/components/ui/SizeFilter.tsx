"use client";

import { ToggleOpen } from "./ToggleOpen";
import { SetSizeButton } from "./SizeButtons";
import { sizes } from "@/app/data/sizes";

type Props = {
  selectedSizes: number[];
  setSelectedSizes: (sizes: number[]) => void;
  isActive?: boolean;
};

export const SizeFilter = ({
  selectedSizes,
  setSelectedSizes,
  isActive,
}: Props) => {
  const handleSizeChange = (sizeId: number) => {
    const updatedSizes = selectedSizes.includes(sizeId)
      ? selectedSizes.filter((s) => s !== sizeId)
      : [...selectedSizes, sizeId];
    return setSelectedSizes(updatedSizes);
  };
  return (
    <ToggleOpen title="Size" isActive={isActive}>
      <div className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <SetSizeButton
            key={size.id}
            size={size.size}
            isActive={selectedSizes.includes(size.id)}
            onClick={() => handleSizeChange(size.id)}
          />
        ))}
      </div>
    </ToggleOpen>
  );
};
