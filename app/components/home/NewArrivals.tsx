import { NewArrivalsProductsLoader } from "../product/NewArrivalsProductsLoader";
import { NavigateButton } from "../ui/NavigateButton";

export const NewArrivals = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <NewArrivalsProductsLoader />
      <NavigateButton label="View All" navigateTo="/products" />
    </div>
  );
};
