import { Check } from "lucide-react";
import { cn } from "../../lib/utils";
type ColorButtonProps = {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const ColorButton = ({
  className,
  isActive,
  onClick,
}: ColorButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full w-8 h-8 cursor-pointer border border-gray-100",
        className
      )}
      onClick={onClick}
    >
      {isActive && <Check className="text-white w-4 h-4 mx-auto " />}
    </button>
  );
};
