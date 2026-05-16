import { Button } from "../ui/Button";
import { cn } from "@/app/lib/utils";
type SizeButtonProps = {
  size: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const SetSizeButton = ({ size, isActive, onClick }: SizeButtonProps) => {
  return (
    <div>
      <Button
        label={size}
        onClick={onClick}
        className={cn(
          "bg-[#F0EEED] text-gray-500 hover:bg-gray-400 rounded-full cursor-pointer",
          isActive && "bg-black text-white"
        )}
      />
    </div>
  );
};
