"use client";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  categoryName: string;
  image: string;
  className?: string;
};

export const Categorycard = ({ categoryName, image, className }: Props) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex rounded-lg bg-white  w-full justify-between overflow-hidden hover:shadow-lg cursor-pointer ",
        className,
      )}
      onClick={() => router.push("/products")}
    >
      <h1 className="font-bold text-xl lg:text-3xl ml-5 mt-5">
        {categoryName}
      </h1>
      <Image
        src={image}
        alt={categoryName}
        width={250}
        height={300}
        className="object-cover  "
      />
    </div>
  );
};
