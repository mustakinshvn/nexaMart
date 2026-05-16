import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { is } from "zod/locales";

type Props = {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
};

export const ToggleOpen = ({ title, children, isActive }: Props) => {
  const [isOpen, setIsOpen] = useState(isActive ?? false);
  return (
    <div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center hover:cursor-pointer "
      >
        <h1 className="text-lg font-semibold ">{title}</h1>
        {isOpen ? (
          <ChevronDownIcon size={18} />
        ) : (
          <ChevronRightIcon size={18} />
        )}
      </div>
      {isOpen && (
        <div className="w-full mt-5 border-b border-gray-300 pb-6">
          {children}
        </div>
      )}
    </div>
  );
};
