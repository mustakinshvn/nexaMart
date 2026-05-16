import { ChevronRight } from "lucide-react";

export const CategoryFilter = () => {
  return (
    <div className=" flex flex-col gap-4 border-b border-gray-300 pb-5 ">
      <span className="flex justify-between">
        <h1 className="text-gray-500">T-shirt</h1>
        <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
      </span>
      <span className="flex justify-between">
        <h1 className="text-gray-500">Shorts</h1>
        <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
      </span>
      <span className="flex justify-between">
        <h1 className="text-gray-500">Shirts</h1>
        <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
      </span>
      <span className="flex justify-between">
        <h1 className="text-gray-500">Hoodie</h1>
        <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
      </span>
      <span className="flex justify-between">
        <h1 className="text-gray-500">Jeans</h1>
        <ChevronRight size={18} className="inline-block ml-2 text-gray-400" />
      </span>
    </div>
  );
};
