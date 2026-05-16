import { getAllProducts } from "@/app/products/actions";
import { ProductProps } from "@/app/type/Product";
import { BoldTitle } from "../ui/BoldTitle";
import { ProductCard } from "./ProductCard";

export const TopSellingProductsLoader = async () => {
  const allProducts: ProductProps[] = await getAllProducts();
  const topSelling = allProducts.slice(0, 5);
  return (
    <div className="flex flex-col items-center justify-center py-7 lg:py-7 gap-5 mt-10 lg:mt-0 px-3">
      <BoldTitle label="TOP SELLING" className=" text-3xl lg:text-4xl" />
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {topSelling.map((product: ProductProps) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            discountedPrice={
              product.discountedPrice || Math.round(product.price * 0.9)
            }
            rating={product.rating || { rate: 4.5, count: 0 }}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
};
