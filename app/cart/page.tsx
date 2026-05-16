"use client";

import Image from "next/image";
import { colors } from "../data/Colors";
import { ShoppingCart, Trash2Icon } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { QuantityButton } from "../components/ui/QuantityButton";
import { OrderSummaryCard } from "../components/cart/OrderSummaryCard";
import { CartItemProps } from "../type/CartItem";
import { GetAllCartItems } from "./actions/getCartAllCartItems";
import { getSubTotal } from "./actions/getSubTotal";
import { getTotalDiscountAmount } from "./actions/getTotalDiscountAmount";
import { Breadcrumb } from "../components/BreadCrumb";
import { sizes } from "../data/sizes";
import { useRouter } from "next/navigation";
export const Page = () => {
  const cartItems = GetAllCartItems();
  const subtotal = Math.round(getSubTotal());
  const discount = Math.round(getTotalDiscountAmount());
  const deliveryFee = 15;
  const { setOrderSummary } = useCart();
  const router = useRouter();
  const totalPrice = subtotal - discount + deliveryFee;

  const handleClick = () => {
    setOrderSummary(subtotal, discount, deliveryFee, totalPrice);
    router.push("/checkout");
  };

  return (
    <>
      <Breadcrumb items={[{ label: "Cart", href: "/cart" }]} />
      <div className="flex flex-col md:flex-row gap-4 px-2 xl:px-8">
        <div className="flex  flex-col  p-2 px-3  xl:p-4 border border-gray-300 w-full md:w-2/3  divide-y divide-gray-300  rounded-lg">
          {cartItems.length === 0 ? (
            <div className="text-center  w-full py-10 flex flex-col  items-center">
              <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold mb-4">Your Cart is Empty</h2>
            </div>
          ) : (
            cartItems.map((item: CartItemProps, index: number) => (
              <CartItem
                key={index}
                index={index}
                id={item.id}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
                size={item.size}
                color={item.color}
                discountedPrice={item.discountedPrice}
                images={item.images}
                rating={item.rating}
                description={item.description}
              />
            ))
          )}
        </div>

        <div className=" w-full md:w-1/3 max-w-full lg:min-w-100 ">
          <OrderSummaryCard
            subtotal={subtotal}
            discount={discount}
            deliveryFee={deliveryFee}
            onclick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Page;

const CartItem = ({
  title,
  price,
  size,
  color,
  discountedPrice,
  images,
  index,
  quantity,
}: CartItemProps) => {
  const cart = useCart();
  return (
    <div className="max-w-full py-4  flex gap-3  rounded-lg">
      <Image
        src={images[0]}
        alt={title}
        width={100}
        height={100}
        className="aspect-square bg-[#F0EEED] rounded-xl cursor-pointer"
      />
      <div className="w-full">
        <span className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={() => {
              if (index !== undefined) {
                cart.removeItem(index);
              }
            }}
            className="cursor-pointer"
          >
            <Trash2Icon size={18} className="text-red-500 hover:text-red-700" />
          </button>
        </span>

        <div>
          <p>
            <span>
              Size: {sizes.map((prev) => prev.id === size && prev.size)}
            </span>
          </p>
          <p>
            Color: {colors.map((prev) => prev.id === color && prev.colorName)}
          </p>
        </div>
        <div>
          <span className="flex justify-between items-center">
            <h1 className="text-md sm:text-xl font-semibold">
              ${discountedPrice ? discountedPrice : price}
            </h1>
            <QuantityButton
              quantity={quantity}
              onChange={(newQuantity) =>
                cart.updateItemQuantity(index ?? 0, newQuantity)
              }
              className="min-w-35"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
