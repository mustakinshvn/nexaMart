"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import TestimonalCard from "./ui/TestimonialCard";
import "swiper/css";
import "swiper/css/bundle";
import { BoldTitle } from "./ui/BoldTitle";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { allTestimonal } from "../data/allTesttimonials";

const TestimonalCards = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="p-2 sm:p-10 w-full  ">
      <div className="flex justify-between items-center mb-4 ">
        <BoldTitle
          label="OUR HAPPY CUSTOMERS"
          className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl  "
        />
        <div className="flex gap-3 mr-3">
          <button
            className="text-black hover:text-gray-500 cursor-pointer font-extrabold"
            onClick={() => swiper?.slidePrev()}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className="text-black hover:text-gray-500 cursor-pointer font-extrabold"
            onClick={() => swiper?.slideNext()}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        loop={true}
        slidesPerView={3}
        onSwiper={setSwiper}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {allTestimonal.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <TestimonalCard
                name={item.name}
                rating={item.rating}
                message={item.message}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonalCards;
