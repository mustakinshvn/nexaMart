"use client";

import NeumericCountWithDescription from "../product/NeumericCountWithDescription";
import { Button } from "../ui/Button";
import { DescriptionCard } from "../ui/DescriptionCard";
import Image from "next/image";
import trendyFashion from "../../../public/trendy-fashion.png";
import { BoldTitle } from "../ui/BoldTitle";
import { useRouter } from "next/navigation";

const neumericCountWithDescription = [
  {
    count: "200",
    description: "International Brands",
    className: "p-3",
  },
  {
    count: "2,000",
    description: "High-Quality Products",
    className: "border-l border-gray-300 p-3",
  },
  {
    count: "30,000",
    description: "Happy Customers",
    className:
      "lg:border-l md:border-l border-gray-300 col-span-2 md:col-span-1 flex justify-center p-3",
  },
];

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between sm:flex-row  px-5 bg-[#F2F0F1] w-full  mx-auto sm:pt-10 opacity-100 ">
      <div className="p-4 flex flex-col justify-center ">
        <div className=" ">
          <BoldTitle
            label="FIND CLOTHES THAT MATCHES YOUR STYLE"
            className="max-w-full sm:max-w-120 text-3xl sm:text-4xl lg:text-5xl"
          />
          <DescriptionCard
            description="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
            classname="mt-5 max-w-105"
          />
        </div>

        <Button
          label="Shop Now"
          className="mt-8 w-full sm:w-50 "
          onClick={() => router.push("/products")}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 py-4">
          {neumericCountWithDescription.map((item, index) => (
            <NeumericCountWithDescription
              key={index}
              count={item.count}
              description={item.description}
              className={item.className}
            />
          ))}
        </div>
      </div>

      <div className=" mx-auto  pl-5 ">
        <Image src={trendyFashion} alt="Icon" width={550} height={200} />
      </div>
    </div>
  );
};

export default HeroSection;
