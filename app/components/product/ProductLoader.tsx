import { ProductContent } from "@/app/components/product/ProductContent";
import { getProductById } from "@/app/products/actions";

export const ProductLoader = async ({ id }: { id: number }) => {
  const products = await getProductById(id);
  if (!products) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }
  return <ProductContent product={products} />;
};
