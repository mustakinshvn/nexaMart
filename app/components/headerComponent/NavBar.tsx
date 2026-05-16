"use client";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import DropDown from "./DropDown";
import { cn } from "@/app/lib/utils";
import { useHeaderMessageContext } from "@/app/contexts/HeaderMessageContext";

const clothsShopOptions = [
  { option: "Men's Clothing", link: "/men" },
  { option: "Women's Clothing", link: "/women" },
  { option: "Kids Clothing", link: "/kids" },
  { option: "Accessories", link: "/accessories" },
  { option: "Shoes", link: "/shoes" },
  { option: "Sale", link: "/sale" },
];

const NavCard = () => {
  return (
    <nav className="flex flex-col sm:flex-row gap-6 justify-center cursor-pointer  ">
      <DropDown title="Shop" options={clothsShopOptions} />
      <p className="text-nowrap">On Sale</p>
      <p className="text-nowrap">New Arivals</p>
      <p className="text-nowrap">Brands</p>
    </nav>
  );
};

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerMessageContext = useHeaderMessageContext();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="hidden md:flex">
        <NavCard />
      </div>
      <button
        onClick={toggleMobileMenu}
        className={cn(
          "md:hidden absolute  left-1 top-0  text-slate-600 rounded-lg   hover:bg-gray-200 hover:text-black transition-colors z-50 pl-0.5",
          headerMessageContext.headerMessageStatus ? "top-16.5 " : "top-7",
        )}
      >
        {!isMobileMenuOpen && <MenuIcon className="w-6 h-6" />}
      </button>

      {isMobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn  "
            onClick={toggleMobileMenu}
          />

          <div className=" md:hidden fixed top-0 left-0 w-19/20 h-full bg-linear-to-b from-white to-slate-50  z-40 ">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <button
                onClick={toggleMobileMenu}
                className="absolute right-3 text-slate-500  p-2 hover:bg-slate-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mx-auto p-6">
              <NavCard />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
