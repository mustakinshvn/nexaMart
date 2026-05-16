"use client";

import { cn } from "@/app/lib/utils";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ currentPage, totalPages }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/products?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages - 1);
      i++
    ) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 2 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="w-full flex justify-evenly items-center z-0 ">
      <button
        className="flex items-center gap-2 justify-between text-gray-600 hover:text-gray-800 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        <ArrowLeft size={20} className="hidden sm:flex" />
        <ChevronLeft size={20} className="flex sm:hidden" />
        <h1 className="hidden sm:flex">Previous</h1>
      </button>

      <div className="flex gap-1">
        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            className={cn(
              "w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors cursor-pointer rounded-md text-gray-900 ",
              page === currentPage
                ? "bg-[#F0F0F0] "
                : page === "..."
                  ? "bg-white text-gray-500 "
                  : "bg-white text-gray-500   hover:bg-gray-50",
            )}
            onClick={() => typeof page === "number" && goToPage(page)}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        className="flex justify-between items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => goToPage(currentPage + 1)}
      >
        <h1 className="hidden sm:flex">Next</h1>

        <ChevronRight size={20} className="flex sm:hidden" />
        <ArrowRight size={20} className="hidden sm:flex" />
      </button>
    </div>
  );
};
