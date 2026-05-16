"use client";

import { allColors } from "@/app/data/allColors";
import { ColorButton } from "./ColorButton";
import { ToggleOpen } from "./ToggleOpen";

type Props = {
  selectedColors: number[];
  setSelectedColors: (colors: number[]) => void;
  isActive?: boolean;
};

export const ColorFilter = ({
  selectedColors,
  setSelectedColors,
  isActive,
}: Props) => {
  const handleColorChange = (colorId: number) => {
    const updatedColors = selectedColors.includes(colorId)
      ? selectedColors.filter((c) => c !== colorId)
      : [...selectedColors, colorId];
    setSelectedColors(updatedColors);
  };

  return (
    <div className="w-full  ">
      <ToggleOpen title="Color" isActive={isActive}>
        <div className="flex flex-wrap gap-4 ">
          {allColors.map((color) => (
            <ColorButton
              key={color.id}
              className={color.color}
              isActive={selectedColors.includes(color.id)}
              onClick={() => handleColorChange(color.id)}
            />
          ))}
        </div>
      </ToggleOpen>
    </div>
  );
};
