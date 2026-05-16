import { TopSellingProductsLoader } from "../product/TopSellingProductsLoader";
import { NavigateButton } from "../ui/NavigateButton";

export const TopSelling = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TopSellingProductsLoader />
      <NavigateButton label="View All" navigateTo="/products" />
    </div>
  );
};
