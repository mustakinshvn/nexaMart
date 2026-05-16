import { ProductProps } from "@/app/type/Product";
import { ProductCard } from "./ProductCard";
import { ShoppingBag } from "lucide-react";
import { localImages } from "@/app/data/localImages";

type Props = {
  currentProducts: ProductProps[];
  className?: string;
};

export const ShowAllProducts = ({ currentProducts, className }: Props) => {
  return currentProducts.length > 0 ? (
    <div className="w-full px-3 flex flex-wrap justify-evenly gap-5  items-center ">
      {currentProducts.map((p: ProductProps) => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          price={p.price}
          discountedPrice={p.discountedPrice || Math.round(p.price * 0.9)}
          rating={p.rating || { rate: 4.5, count: 0 }}
          images={p.images ? p.images : localImages}
          description={p.description || "No description available."}
          className={className}
        />
      ))}
    </div>
  ) : (
    <div className=" flex flex-col justify-center items-center   w-full p-2  ">
      <ShoppingBag size={150} className="text-gray-400" />
      <h2 className="font-semibold text-xl lg:text-3xl text-gray-400">
        No Products Found
      </h2>
      <p className="text-gray-400 text-wrap text-center">
        Your search did not match any products. Please try adjusting your
        filters{" "}
      </p>
    </div>
  );
};
