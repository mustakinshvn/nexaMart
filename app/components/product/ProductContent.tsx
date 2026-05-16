import { ProductInformationCard } from "@/app/components/product/ProductInformationCard";
import { ProductProps } from "@/app/type/Product";

export const ProductContent = ({ product }: { product: ProductProps }) => (
  <div className="w-full px-2 sm:px-6">
    <ProductInformationCard
      id={product.id}
      title={product.title}
      price={product.price}
      discountedPrice={
        product?.discountedPrice || Math.round((product?.price || 0) * 0.9)
      }
      images={product?.images}
      rating={product?.rating || { rate: 0, count: 0 }}
      description={product?.description}
    />
  </div>
);
