import React from "react";
import { cn } from "@/app/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: Props) {
  return (
    <div className={cn("bg-white rounded-lg flex justify-center w-11 h-7 ", className)}>
      {children}
    </div>
  );
}