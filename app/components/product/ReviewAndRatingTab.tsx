import { ChevronDown, SlidersVertical } from "lucide-react";
import { Button } from "../ui/Button";
import TestimonialCard from "../ui/TestimonialCard";
import { useState, useTransition } from "react";
import { allTestimonal } from "@/app/data/allTesttimonials";

export const ReviewAndRatingTab = () => {
  const reviews = allTestimonal;
  const totalReviews = reviews.length;

  const starIndex = 0;
  const [endIndex, setEndIndex] = useState(6);
  const reviewsToShow = reviews.slice(starIndex, endIndex);
  const [isPending, startTransition] = useTransition();

  const handleChange = () => {
    startTransition(() => {
      setEndIndex((prev) => prev + 3);
    });
  };

  return (
    <div className="mt-5 px-2  w-full items-center flex flex-col gap-6">
      <div className="w-full flex  justify-between text-nowrap">
        <div className="flex items-center gap-2">
          <h1 className="text-lg lg:text-2xl font-semibold">All Reviews</h1>
          <h1 className="text-sm lg:text-lg text-gray-500">({totalReviews})</h1>
        </div>
        <div className="flex gap-2 items-center ">
          <SlidersVertical className="bg-[#F0EEED] p-2.5 rounded-full h-10 w-10" />
          <div className="hidden md:flex justify-evenly bg-[#F0EEED] py-1 px-6 rounded-full h-10  items-center cursor-pointer ">
            <h1 className="">Latest</h1>
            <ChevronDown size={18} />
          </div>
          <Button label="Write a review" className="h-10 text-center" />
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-3 mt-5 ">
        {reviewsToShow.map((review, index) => (
          <TestimonialCard
            key={index}
            name={review.name}
            rating={review.rating}
            message={review.message}
            postedAt={review.postedAt}
            isReviewCard={true}
          />
        ))}
      </div>
      <Button
        label={isPending ? "Loading..." : "Load More Reviews"}
        className="text-black bg-white border border-gray-300 hover:bg-gray-200 max-w-60"
        onClick={handleChange}
        disabled={isPending || endIndex >= totalReviews}
      />
    </div>
  );
};
