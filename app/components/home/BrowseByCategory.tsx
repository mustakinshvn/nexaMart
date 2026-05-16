import { BoldTitle } from "../ui/BoldTitle";
import { Categorycard } from "../ui/CategoryCard";
import { cn } from "@/app/lib/utils";
import { allCategories } from "@/app/data/allCategories";

export const BrowseByCategory = () => {
  return (
    <div className="my-5 lg:m-10 flex items-center justify-center bg-[#F0F0F0] p-4 py-10   lg:p-15 flex-col rounded-xl">
      <BoldTitle
        label="BROWSE BY DRESS STYLE"
        className="text-4xl mb-10 text-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-7 w-full gap-4 ">
        {allCategories.map((c, index) => (
          <Categorycard
            key={index}
            categoryName={c.categoryName}
            image={c.image}
            className={cn(
              index % 4 === 1 || index % 4 === 2
                ? "sm:col-span-4"
                : "sm:col-span-3",
            )}
          />
        ))}
      </div>
    </div>
  );
};
