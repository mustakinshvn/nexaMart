export type ColorProps = {
  id: number;
  colorName: string;
  color: string;
}

export type SizeProps = {
  id: number;
  size: string;
}

export type ProductVariantProps = {
  id: number;
  color: ColorProps;
  size: SizeProps;
  stock: number;
}

export type ProductProps = {
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
  variant?: ProductVariantProps[];
  images: string[];
  colorId?: number;
  sizeId?: number;
  category?: string;
};


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