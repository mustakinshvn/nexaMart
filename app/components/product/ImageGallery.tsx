"use client";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { localImages } from "@/app/data/localImages";

type ImageGalleryProps = {
  images: string[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageList =
    images && images.length > 0
      ? [...images, ...localImages].slice(0, 3)
      : localImages.slice(0, 3);

  const [selectedImage, setSelectedImage] = useState(
    imageList.length > 0 ? imageList[0] : "",
  );

  return (
    <div className="flex flex-col sm:flex-row md:flex-col  lg:flex-row gap-2 justify-center items-center  md:w-1/2">
      <div className="flex  sm:flex-col md:flex-row lg:flex-col  gap-2 justify-center order-1  sm:order-0 md:order-1 lg:order-0 md:max-w-8/23  lg:min-w-6/25  ">
        {imageList.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Product"
            height={173}
            width={173}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "rounded-xl  cursor-pointer aspect-square max-w-8/25 sm:max-w-full  ",
              selectedImage === image ? "border border-gray-400" : "",
            )}
          />
        ))}
      </div>
      <div className="flex justify-center items-center -md:order-1 max-full ">
        <Image
          src={selectedImage}
          alt="Selected Product"
          height={445}
          width={445}
          className=" rounded-xl aspect-square w-130 md:w-132  h-full p-1 bg-[#F0EEED] "
        />
      </div>
    </div>
  );
};
