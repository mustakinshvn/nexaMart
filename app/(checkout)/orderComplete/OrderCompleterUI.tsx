"use client";

import { useRouter } from "next/navigation";

const OrderCompleterUI = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-10 px-2">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Thanks for Ordering!
        </h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 cursor-pointer"
            onClick={() => router.push("/products")}
          >
            Browse Products
          </button>
          <button
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleterUI;
