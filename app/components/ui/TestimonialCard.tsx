import RatingStars from "./RatingStars";
import { TitleCard } from "./TitleCard";
import { DescriptionCard } from "./DescriptionCard";
import { cn } from "@/app/lib/utils";
import { EllipsisIcon } from "lucide-react";

type Props = {
  rating: number;
  message: string;
  name: string;
  postedAt?: string;
  className?: string;
  isReviewCard?: boolean;
};

const TestimonialCard = ({
  rating,
  message,
  name,
  postedAt,
  className,
  isReviewCard,
}: Props) => {
  return (
    <div
      className={cn(
        "border border-gray-300 rounded-3xl  flex flex-col grow p-6 gap-2 sm:w-full md:max-w-90 lg:max-w-md",
        className,
      )}
    >
      <div className="flex justify-between">
        <RatingStars rating={rating} />
        {isReviewCard && (
          <EllipsisIcon className="float-right cursor-pointer text-gray-400 hover:text-gray-600" />
        )}
      </div>
      <TitleCard label={name} isVerified={true} />
      <DescriptionCard
        description={message}
        isQuote={true}
        classname="line-clamp-3"
      />
      {postedAt && (
        <h1 className="text-sm text-gray-400 font-semibold mt-2">
          Posted on {postedAt}
        </h1>
      )}
    </div>
  );
};

export default TestimonialCard;
