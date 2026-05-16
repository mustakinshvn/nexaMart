import { Breadcrumb } from "@/app/components/BreadCrumb";
import OrderCompleterUI from "./OrderCompleterUI";

const page = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Cart", href: "/cart" },
          { label: "Checkout", href: "/checkout" },
        ]}
        className="px-4 md:px-3"
      />
      <OrderCompleterUI />
    </>
  );
};

export default page;
