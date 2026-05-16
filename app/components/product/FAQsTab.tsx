import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/app/lib/utils";
import { faqsData } from "@/app/data/fAQsData";

export const FAQsTab = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full">
      <div className="w-full mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center ">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-500 rounded-full ">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-600 mb-4">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-8">
          {faqsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="bg-gray-500 px-6 py-4">
                <div className="flex items-center gap-3 text-white">
                  <category.icon className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
              </div>

              <div className="divide-y divide-gray-200 transition-all duration-300 ease-in-out ">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={itemIndex}>
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-all duration-300 ease-in-out cursor-pointer"
                      >
                        <span className="font-semibold text-slate-900 pr-8">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-gray-400 transition-transform",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help you 24/7
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button label="Contact Support" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
