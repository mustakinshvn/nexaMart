import { GetAllCartItems } from "./getCartAllCartItems";
export const getTotalDiscountAmount = () => {
    const CartItems = GetAllCartItems();
    const discount = CartItems.reduce(
    (total, item) =>
      total +
      (item.price - (item.discountedPrice ?? item.price)) * item.quantity,
    0
  );
  return discount;
}

