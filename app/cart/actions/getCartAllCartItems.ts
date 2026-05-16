'use client';
import { useCart } from "@/app/contexts/CartContext";
export const GetAllCartItems =  () => {
  const { CartItems } = useCart();
  return CartItems;
}
