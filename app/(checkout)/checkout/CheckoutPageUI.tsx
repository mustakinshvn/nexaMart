"use client";

import { OrderSummaryCard } from "@/app/components/cart/OrderSummaryCard";
import { BillingSection } from "@/app/components/checkout/BillingSection";
import { CartProducts } from "@/app/components/checkout/CartProducts";
import { useCart } from "@/app/contexts/CartContext";

export const CheckoutPageUI = () => {
  const { orderSummaryData } = useCart();

  const handlePlaceOrder = () => {};

  return (
    <div className="flex flex-col md:flex-row w-full px-2 lg:px-10 md:gap-6 lg:gap-8 ">
      <BillingSection onClick={handlePlaceOrder} />
      <div className="w-full md:w-1/3 px-3">
        <CartProducts />
        <OrderSummaryCard
          subtotal={orderSummaryData?.subtotal || 0}
          discount={orderSummaryData?.discount || 0}
          deliveryFee={orderSummaryData?.deliveryFee || 0}
          onclick={handlePlaceOrder}
          isCheckoutPage={true}
        />
      </div>
    </div>
  );
};
