
export type ProductPropsWithVariant = {
  id: number;
  title: string;
  description?: string;
  rating: {
    rate: number;
    count: number;
  };
  className?: string;
  price: number;
  discountedPrice?: number;
  variant: ProductVariantProps[];
  images: string[];
  colorId?: number;
  sizeId?: number;
  category?: string;
};