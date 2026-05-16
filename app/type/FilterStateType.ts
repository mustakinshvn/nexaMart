export type FilterState = {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  searchQuery?: string;
  sortBy?: string;
  color?: number[];
  size?: number[];
  query?: string[];
};