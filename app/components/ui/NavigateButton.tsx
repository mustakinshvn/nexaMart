"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { cn } from "@/app/lib/utils";

type Props = {
  navigateTo: string;
  label: string;
  className?: string;
};

export const NavigateButton = ({ navigateTo, label, className }: Props) => {
  const router = useRouter();
  return (
    <div>
      <Button
        label={label}
        onClick={() => router.push(navigateTo)}
        className={cn(
          " bg-white border border-[#F0EEED] text-gray-700 hover:bg-gray-200  ",
          className
        )}
      />
    </div>
  );
};
