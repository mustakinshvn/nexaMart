import { Suspense } from "react";
import { ProductLoader } from "@/app/components/product/ProductLoader";
import { Tabs } from "./Tabs";
import { YouMightAlsoLike } from "@/app/components/product/YouMayAlsoLike";
import { Breadcrumb } from "@/app/components/BreadCrumb";
const LoadingFallback = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <h2 className="text-2xl font-semibold">Loading product...</h2>
  </div>
);

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: idString } = await params;
  const id = parseInt(idString, 10);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Products", href: "/products" },
          { label: `Product-${id}`, href: `/products/${id}` },
        ]}
      />
      <div>
        <Suspense fallback={<LoadingFallback />}>
          <ProductLoader id={id} />
        </Suspense>
        <Tabs />
        <YouMightAlsoLike />
      </div>
    </>
  );
};

export default Page;
