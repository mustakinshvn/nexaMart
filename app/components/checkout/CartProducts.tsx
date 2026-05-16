"use client";

import { useCart } from "@/app/contexts/CartContext";
import { CartItemProps } from "@/app/type/CartItem";
import Image from "next/image";

export const CartProducts = () => {
  const { CartItems } = useCart();
  return (
    <div className="flex flex-col gap-4 p-5 border border-gray-300 rounded-lg my-4">
      {CartItems.map((item: CartItemProps) => (
        <span key={item.id} className="flex justify-between">
          <Image
            src={item.images[0]}
            alt={item.title}
            width={50}
            height={50}
            className="aspect-square bg-[#F0EEED] rounded-xl cursor-pointer p-2"
          />
          <span className="flex justify-center items-center font-semibold">
            ${Math.round(item.price)}
          </span>
        </span>
      ))}
    </div>
  );
};
