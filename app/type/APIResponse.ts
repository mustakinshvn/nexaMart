
export type APIResponseProps = {
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
  image: string ;
};