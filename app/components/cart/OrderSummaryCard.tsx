"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { allCupons } from "@/app/data/allCupons";
import { useCart } from "@/app/contexts/CartContext";

enum cuponStatus {
  APPLIED = "coupon already applied",
  SUCCESS = "coupon applied successfully!",
  INVALID = "Invalid coupon code",
  NONE = "",
}

type OrderSummaryCardProps = {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  onclick: () => void;
  isCheckoutPage?: boolean;
};
export const OrderSummaryCard = ({
  subtotal,
  discount,
  deliveryFee,
  onclick,
  isCheckoutPage = false,
}: OrderSummaryCardProps) => {
  const { setCuponData, cuponData, clearCuponData, CartItems } = useCart();
  const cartItemsCount = CartItems.length;

  const [cuponDiscount, setCuponDiscount] = useState(
    cuponData?.cuponDiscount || 0,
  );
  const [cuponCode, setCuponCode] = useState(cuponData?.cuponCode || "");
  const [message, setMessage] = useState(
    cuponData?.cuponSuccessMessage || cuponStatus.NONE,
  );

  const [isCuponApplied, setIsCuponApplied] = useState(cuponDiscount > 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCuponCode(e.target.value);
    setMessage("");
    setIsCuponApplied(false);
  };

  const handleCuponApply = () => {
    const existingCupon = cuponData?.cuponCode || "";
    if (cuponDiscount > 0 && existingCupon === cuponCode) {
      setMessage(`${existingCupon} ${cuponStatus.APPLIED}`);
      setIsCuponApplied(true);
      setCuponData(cuponCode, cuponDiscount, cuponStatus.APPLIED);
      return;
    }
    const matchedCoupon = allCupons.find((c) => c.CuponCode === cuponCode);

    if (matchedCoupon) {
      setCuponDiscount(matchedCoupon.discount);
      setMessage(`${matchedCoupon.CuponCode} ${cuponStatus.SUCCESS}`);
      setIsCuponApplied(true);
      setCuponData(
        matchedCoupon.CuponCode,
        matchedCoupon.discount,
        `${matchedCoupon.CuponCode} ${cuponStatus.SUCCESS}`,
      );
    } else {
      setMessage(cuponStatus.INVALID);
      setCuponDiscount(0);
      setIsCuponApplied(false);
      setCuponData("", 0, cuponStatus.INVALID);
      clearCuponData?.();
    }
  };

  return (
    <div className="w-full flex flex-col border border-gray-300 p-8  rounded-lg gap-4">
      <h2 className="font-semibold text-lg mb-3">Order Summary</h2>
      <div className="flex flex-col gap-3">
        <span className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold">${subtotal}</p>
        </span>

        <span className="flex justify-between">
          <p className="text-gray-600">Discount</p>
          {discount > 0 ? (
            <p className="font-semibold text-red-400">-${discount}</p>
          ) : (
            <p className="font-semibold">$0</p>
          )}
        </span>

        <span className="flex justify-between">
          <p className="text-gray-600">Delivery Fee</p>
          {subtotal > 0 ? (
            <p className="font-semibold">${deliveryFee}</p>
          ) : (
            <p className="font-semibold">$0</p>
          )}
        </span>

        {cuponDiscount > 0 && (
          <span className="flex justify-between">
            <p className="text-gray-600">Coupon Discount</p>
            <p className="text-red-400 font-semibold">-${cuponDiscount}</p>
          </span>
        )}
      </div>
      <span className="flex justify-between mt-3 border-t border-gray-300 pt-2">
        <h1>Total</h1>
        <h1 className="font-semibold text-xl">
          $
          {subtotal -
            discount +
            (subtotal > 0 ? deliveryFee : 0) -
            cuponDiscount}
        </h1>
      </span>

      <div className="flex flex-col sm:flex-row sm:justify-between md:flex-col xl:flex-row xl:justify-between items-center gap-4  ">
        <div className=" min-h-10 flex items-center  flex-1  xl:w-2/3  border border-gray-300 w-full   rounded-full px-3">
          <Image src="/cupon.png" alt="Cupon" height={20} width={20} />
          <input
            type="text"
            placeholder="Coupon Code"
            className=" h-full px-2 bg-transparent rounded-full focus:outline-none"
            onChange={handleChange}
            value={cuponCode}
          />
        </div>

        <Button
          label="Apply Coupon"
          onClick={() => handleCuponApply()}
          className={cn(
            "min-h-10 sm:h-10 w-full sm:w-1/3 md:w-full xl:w-1/3 px-4 text-nowrap",
            cartItemsCount === 0 || isCuponApplied || subtotal < 100
              ? "opacity-50 cursor-not-allowed "
              : "",
          )}
          disabled={cartItemsCount === 0 || isCuponApplied || subtotal < 100}
        />
      </div>
      {subtotal < 100 && (
        <p className="text-orange-600">
          Minimum order amount of $100 required to apply coupon.
        </p>
      )}
      {message && (
        <p className={cn(cuponDiscount ? "text-green-500" : "text-red-500")}>
          {message}
        </p>
      )}
      {!isCheckoutPage ? (
        <button
          className={cn(
            "bg-black hover:bg-gray-800 text-white min-h-10 rounded-full cursor-pointer ",
            cartItemsCount === 0 ? "opacity-50 cursor-not-allowed " : "",
          )}
          disabled={cartItemsCount === 0}
          onClick={onclick}
        >
          <div className="flex items-center justify-center gap-2">
            <h1>Go to Checkout</h1>
            <MoveRight size={16} />
          </div>
        </button>
      ) : null}
    </div>
  );
};
