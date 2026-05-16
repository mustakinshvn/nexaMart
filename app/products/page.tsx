import { Breadcrumb } from "../components/BreadCrumb";
import { ProductsPage } from "./ProductsPage";
import {
  filterProducts,
  getAllProducts,
  updateProductWithStaticVariant,
  utilizedSearchBarQueryInput,
} from "./actions";

const MIN_PRICE = 0;
const MAX_PRICE = 10000;

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    color?: string;
    size?: string;
    priceMin?: string;
    priceMax?: string;
    query?: string;
  }>;
}) => {
  const params = await searchParams;
  const colorsString = params.color ?? "";
  const sizesString = params.size ?? "";
  const priceMinParam = params.priceMin;
  const priceMaxParam = params.priceMax;
  const query = params.query ?? "";

  const filterColors = colorsString.split(",").filter(Boolean).map(Number);
  const filterSizes = sizesString.split(",").filter(Boolean).map(Number);
  const filterPriceRange = {
    min: Number(priceMinParam) || 0,
    max: Number(priceMaxParam) || 10000,
  };
  const queryLower = await utilizedSearchBarQueryInput(query);
  console.log("Search Params in Products Page:", queryLower);

  const AllProducts = await getAllProducts();
  const UpdatedProducts = await updateProductWithStaticVariant(AllProducts);
  const currentPage = Number(params.page ?? "1");
  const filteredProducts = await filterProducts({
    filters: {
      color: filterColors,
      size: filterSizes,
      priceRange: filterPriceRange,
      query: queryLower,
    },
    currentProducts: UpdatedProducts,
  });

  return (
    <>
      <Breadcrumb items={[{ label: "Products", href: "/products" }]} />
      <div className="flex pb-10 lg:px-10 gap-4 w-full justify-between">
        <ProductsPage
          currentPage={currentPage}
          currentProducts={UpdatedProducts}
          filteredProducts={filteredProducts}
          maxPrice={MAX_PRICE}
          minPrice={MIN_PRICE}
          colorParams={filterColors}
          sizeParams={filterSizes}
          priceMinParam={filterPriceRange.min}
          priceMaxParam={filterPriceRange.max}
        />
      </div>
    </>
  );
};

export default page;
