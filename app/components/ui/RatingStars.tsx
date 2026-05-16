"use client";

import { cn } from "@/app/lib/utils";
import { Star, StarHalf } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  max?: number;
  className?: string;
  showRating?: boolean;
  classNameStar?: string;
  classNameRating?: string;
};

export default function RatingStars({
  rating,
  className,
  showRating,
  classNameStar,
  classNameRating,
}: RatingStarsProps) {
  const max = 5;
  return (
    <div className={cn("flex items-center gap-1    ", className)}>
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1;

        if (rating >= starValue) {
          return (
            <Star
              key={i}
              className={cn(
                "w-5 h-5 fill-yellow-400 text-yellow-400",
                classNameStar
              )}
            />
          );
        }

        if (rating >= starValue - 0.5) {
          return (
            <StarHalf
              key={i}
              className={cn(
                "w-5 h-5 fill-yellow-400 text-yellow-400",
                classNameStar
              )}
            />
          );
        }
      })}

      {showRating && (
        <p className={cn("text-xl ml-2", classNameRating)}>
          <span className="text-black"> {rating}/</span>
          <span className="text-gray-400">5</span>
        </p>
      )}
    </div>
  );
}
