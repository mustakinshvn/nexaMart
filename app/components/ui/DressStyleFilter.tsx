"use client";

import { ChevronRight } from "lucide-react";
import { ToggleOpen } from "./ToggleOpen";

export const DressStyleFilter = () => {
  return (
    <ToggleOpen title="Dress Style">
      <div className=" flex flex-col gap-4">
        <span className="flex justify-between">
          <h1 className="text-gray-500">Casual</h1>
          <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
        </span>
        <span className="flex justify-between">
          <h1 className="text-gray-500">Formal</h1>
          <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
        </span>
        <span className="flex justify-between">
          <h1 className="text-gray-500">Party</h1>
          <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
        </span>
        <span className="flex justify-between">
          <h1 className="text-gray-500">Jeans</h1>
          <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
        </span>
      </div>
    </ToggleOpen>
  );
};
