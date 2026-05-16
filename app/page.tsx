import HeroSection from "./components/home/HeroSection";
import BrandShowcase from "./components/home/BrandShowcase";
import TestimonalCards from "./components/TestimonalCards";
import { NewArrivals } from "./components/home/NewArrivals";
import { TopSelling } from "./components/home/TopSelling";
import { BrowseByCategory } from "./components/home/BrowseByCategory";

export default function HomePage() {
  return (
    <>
      <div className="w-full ">
        <HeroSection />

        <BrandShowcase />
        <NewArrivals />
        <TopSelling />
        <BrowseByCategory />

        <TestimonalCards />
      </div>
    </>
  );
}
