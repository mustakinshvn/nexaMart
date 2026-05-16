import { filterBy } from "@/app/data/filterBy";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
type Props = {
  className?: string;
};

export const FilterProductDropDown = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(filterBy[0]);

  const handleFilterSelect = (filter: string) => {
    setActiveFilter(filter);
    setIsOpen((prev) => !prev);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={className}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full font-semibold text-black flex items-center  text-center justify-between hover:cursor-pointer"
      >
        {activeFilter}
        <ChevronDown size={18} className="text-gray-900 mt-0.5" />
      </button>
      {isOpen && (
        <div className="absolute flex flex-col border border-gray-300 bg-white z-10 rounded-lg p-4 gap-3 text-black ">
          {filterBy.map((filter, index) => (
            <button
              key={index}
              onClick={() => handleFilterSelect(filter)}
              className="hover:text-gray-500 hover:cursor-pointer"
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
