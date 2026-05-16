import { cn } from "@/app/lib/utils";
import { Check } from "lucide-react";

type TitleProps = {
  label: string;
  classNameLabel?: string;
  classNamehDiv?: string;
  isVerified?: boolean;
  classNameIcon?: string;
};

export function TitleCard(Props: TitleProps) {
  return (
    <div className={cn("flex items-center space-x-2", Props.classNamehDiv)}>
      <h1 className={cn("font-semibold", Props.classNameLabel)}>
        {Props.label}
      </h1>

      {Props.isVerified && (
        <div className="bg-green-600 rounded-full p-0.5 h-4 w-4 flex items-center justify-center">
          <Check size={18} className="text-white font-bold" />
        </div>
      )}
    </div>
  );
}
