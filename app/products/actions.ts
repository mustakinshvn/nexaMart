"use server";

import { ProductProps, ProductPropsWithVariant } from "../type/Product";
import { FilterState } from "../type/FilterStateType";
import { APIResponseProps } from "../type/APIResponse";
import { allColors } from "../data/allColors";
import { sizes } from "../data/sizes";

export const getProductById = async (id: number) => {
  const product: APIResponseProps = await fetch(`${process.env.BASE_URL}/products/${id}`)
    .then((res) => res.json())
    .catch(() => null);
  return transformProduct(product);
}

export const transformProduct = async (p: APIResponseProps): Promise<ProductProps> => {
  return {
    ...p,
    images: [p.image], 
  };
};

export const  getAllProducts = async() => {
    const products = await fetch(`${process.env.BASE_URL}/products`)    
    .then(res => res.json());
    const transformedProducts = await Promise.all(products.map(transformProduct));
    return transformedProducts;
}

export const updateProductWithStaticVariant = async (products: ProductPropsWithVariant[]) => {
    const UpdatedProducts =  products.map((product: ProductPropsWithVariant) => {
        const discountedPrice =
          product.discountedPrice !== undefined
            ? product.discountedPrice
            : Math.round(product.price * 0.9);
        const variant = product.variant
          ? product.variant
          : Array.from({ length: Math.floor(Math.random() * 7) + 4 }, (_, i) => ({
              id: i,
              color: allColors[Math.floor(Math.random() * allColors.length)],
              size: sizes[Math.floor(Math.random() * sizes.length)],
              stock: Math.floor(Math.random() * 30),
            }));
        return { ...product, discountedPrice, variant };
      });

      return UpdatedProducts;
}

type FilterProductsProps = {
    filters: FilterState;
    currentProducts:  ProductPropsWithVariant[];
}

export const filterProducts= async ({filters,currentProducts}: FilterProductsProps) => {
    const filteredProducts = currentProducts.filter((product) => {
        const matchesColor = (filters.color?.length ?? 0) > 0
          ? product.variant.some((v) => filters.color?.includes(v.color.id))
          : true;
       const matchesSize = (filters.size?.length ?? 0) > 0
            ? product.variant.some((v) => filters.size?.includes(v.size.id))
            : true; 
        const matchesPriceRange = filters.priceRange
          ? product.price >= filters.priceRange.min &&
            product.price <= filters.priceRange.max
          : true;

         const matchesQuery = filters.query && filters.query.length > 0
          ? filters.query.some((q) =>
              product.title.toLowerCase().includes(q) ||
              product.title.toLowerCase().includes(q)
            )
          : true; 
        return matchesPriceRange && matchesColor && matchesSize && matchesQuery;
      }
    );
    return filteredProducts;
}


export const utilizedSearchBarQueryInput = async (query: string) => {
      const queryLower = query.trim().toLowerCase().split(" ");
      return queryLower;
  }
