import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type DropdownOption = {
  option: string;
  link: string;
};

type DropDownProps = {
  options: DropdownOption[];
  title?: string;
};

const DropDown = ({ options, title }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div
      ref={dropdownRef}
      className="relative inline-block items-center cursor-pointer"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-nowrap justify-center items-center cursor-pointer"
      >
        {title || "Menu"}
        <ChevronDown size={16} className="inline-block ml-1" />
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border border-gray-200  shadow-lg z-10 min-w-max rounded-2xl">
          {options.map((item) => (
            <li key={item.link}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.option}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
