import { cn } from "@/app/lib/utils";
import { BBH_Sans_Hegarty } from "next/font/google";

const geist = BBH_Sans_Hegarty({
  weight: ["400"],
});

type Props = {
  className?: string;
  label: string;
};

function BoldTitle({ className, label }: Props) {
  return <h1 className={cn(`${geist.className} `, className)}>{label}</h1>;
}

export { BoldTitle };
