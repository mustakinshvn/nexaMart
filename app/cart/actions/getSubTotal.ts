'use client'
import { GetAllCartItems } from "./getCartAllCartItems";
export const getSubTotal = () => {
    const CartItems  = GetAllCartItems();
   return CartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}