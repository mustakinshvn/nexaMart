"use client";

import { FAQsTab } from "@/app/components/product/FAQsTab";
import { ProductDetailsTab } from "@/app/components/product/ProductDetailsTab";
import { ReviewAndRatingTab } from "@/app/components/product/ReviewAndRatingTab";
import { cn } from "@/app/lib/utils";
import { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="px-2 lg:px-10">
      <div className="flex justify-evenly border-b border-gray-300 ">
        <TabSwithcher
          tabName="Product Details"
          isActive={activeTab === 1}
          setActiveTab={setActiveTab}
          tabIndex={1}
        />
        <TabSwithcher
          tabName="Rating & Reviews"
          isActive={activeTab === 2}
          setActiveTab={setActiveTab}
          tabIndex={2}
        />
        <TabSwithcher
          tabName="FAQs"
          isActive={activeTab === 3}
          setActiveTab={setActiveTab}
          tabIndex={3}
        />
      </div>
      {activeTab === 1 && <ProductDetailsTab />}
      {activeTab === 2 && <ReviewAndRatingTab />}
      {activeTab === 3 && <FAQsTab />}
    </div>
  );
};

type TabSwithcherProps = {
  tabName: string;
  isActive: boolean;
  setActiveTab: (tabIndex: number) => void;
  tabIndex: number;
};
const TabSwithcher = ({
  tabName,
  isActive,
  setActiveTab,
  tabIndex,
}: TabSwithcherProps) => {
  return (
    <button
      className={cn(
        "w-full text-center text-nowrap ",
        isActive
          ? "border-b-2 border-black font-semibold "
          : "text-gray-600 hover:text-gray-800 font-medium ",
        "px-4 py-2  transition  cursor-pointer text-sm ",
      )}
      onClick={() => setActiveTab && setActiveTab(tabIndex)}
    >
      {tabName}
    </button>
  );
};
