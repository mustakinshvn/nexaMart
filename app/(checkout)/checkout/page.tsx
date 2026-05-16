import { Breadcrumb } from "@/app/components/BreadCrumb";
import { CheckoutPageUI } from "./CheckoutPageUI";

const page = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Cart", href: "/cart" },
          { label: "Checkout", href: "/checkout" },
        ]}
        className="px-5 md:px-3"
      />
      <CheckoutPageUI />
    </>
  );
};

export default page;
