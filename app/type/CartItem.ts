export type CartItemProps = {
  id: number;
  title: string;
  price: number;
  size: number;
  color: number;
  discountedPrice?: number;
  images: string[] | string;
  rating?: {
    rate: number;
    count: number;
  };
  description?: string;
  index?: number;
  quantity: number;
};

