import { cn } from "@/app/lib/utils";
type ButtonProps = {
  onClick?: () => void;
  className?: string;
  label?: string;
  disabled?: boolean;
  isPending?: boolean;
};

function Button(Props: ButtonProps) {
  return (
    <button
      disabled={Props.disabled}
      onClick={Props.onClick}
      className={cn(
        "px-4 py-2 bg-black text-white hover:bg-gray-800  transition  cursor-pointer rounded-full text-sm font-medium",
        Props.disabled && " cursor-not-allowed",
        Props.className,
      )}
    >
      {Props.label}
    </button>
  );
}

export { Button };
