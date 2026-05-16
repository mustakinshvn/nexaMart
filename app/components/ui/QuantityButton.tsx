"use client";
import { cn } from "@/app/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useEffect, useRef } from "react";
type Props = {
  className?: string;
  quantity: number;
  onChange: (qty: number) => void;
};

export const QuantityButton = ({ className, quantity, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = String(quantity);
    }
  }, [quantity]);

  const commit = () => {
    if (!inputRef.current) return;
    const num = parseInt(inputRef.current.value);
    onChange(!isNaN(num) && num >= 1 ? num : 1);
  };

  return (
    <div
      className={cn(
        "rounded-4xl bg-gray-200  h-13 flex justify-evenly items-center font-bold",
        className
      )}
    >
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="hover:text-gray-400"
      >
        <Minus size={20} />
      </button>

      <input
        ref={inputRef}
        defaultValue={quantity}
        onBlur={commit}
        className="max-w-8 text-center bg-transparent outline-none"
      />

      <button
        onClick={() => onChange(quantity + 1)}
        className="hover:text-gray-400"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};
