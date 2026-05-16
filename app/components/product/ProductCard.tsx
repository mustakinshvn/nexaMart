"use client";
import Image from "next/image";
import { TitleCard } from "../ui/TitleCard";
import RatingStars from "../ui/RatingStars";
import { PriceCard } from "./PriceCard";
import { useRouter } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { Button } from "../ui/Button";
import { useCart } from "@/app/contexts/CartContext";
import toast from "react-hot-toast";
import { ProductProps } from "@/app/type/Product";

type Props = ProductProps & {
  className?: string;
};

export const ProductCard = ({
  id,
  title,
  price,
  images,
  discountedPrice,
  rating,
  className,
}: Props) => {
  const router = useRouter();
  const cart = useCart();
  const existingInCart = cart.getItemById(id);

  const handleAddToCart = () => {
    if (existingInCart) {
      toast.error("Product already in cart");
      return;
    }

    cart.addItem({
      id,
      title,
      quantity: 1,
      price,
      size: 0,
      color: 0,
      discountedPrice,
      images,
      rating,
    });
    toast.success("Product added to cart");
  };
  return (
    <div
      className={cn(
        " relative flex flex-col group   items-center justify-center hover:scale-105 transition-transform border border-gray-200 duration-200 ease-in-out shadow-md rounded-3xl  bg-white w-full sm:w-70 md:w-80 lg:w-60   ",
        className,
      )}
    >
      <div className="w-full relative">
        <Image
          src={images[0]}
          alt={title}
          width={300}
          height={300}
          className="w-full aspect-square bg-[#F0EEED] rounded-3xl cursor-pointer p-7  "
          onClick={() => router.push("/products/" + id)}
        />
        <Button
          label={existingInCart ? "Already in Cart" : "Add to Cart"}
          onClick={handleAddToCart}
          className={cn(
            "absolute bottom-0  w-full rounded-none  hidden group-hover:block ",
            existingInCart &&
              "bg-gray-400 hover:bg-gray-400 cursor-not-allowed",
          )}
        />
      </div>

      <div className="flex flex-col py-2 px-4 ">
        <TitleCard
          label={title}
          classNameLabel="mt-1 line-clamp-1 font-semibold"
        />
        {rating && (
          <RatingStars
            rating={rating.rate}
            showRating={true}
            classNameStar="h-4  w-4"
            classNameRating="text-md"
          />
        )}
        <PriceCard price={price} discountedPrice={discountedPrice} />
      </div>
    </div>
  );
};
