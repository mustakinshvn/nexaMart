"use client";
import { useRouter } from "next/navigation";
import NavBar from "./headerComponent/NavBar";
import CartWithProfileIcon from "./headerComponent/CartWithProfileIcon";
import { Logo } from "./ui/Logo";
import SearchBar from "./headerComponent/SearchBar";
import { Toaster } from "react-hot-toast";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Toaster />
      <div className=" shadow-lg h-20 item-center flex p-2 md:p-6 w-full">
        <div className=" items-center gap-5 flex grow ">
          <div
            className="cursor-pointer ml-4 md:ml-0"
            onClick={() => router.push("/")}
          >
            <Logo />
          </div>
          <div className="-order-1 md:order-0 ">
            <NavBar />
          </div>
        </div>

        <div className="flex justify-center items-center lg:gap-4 mr-3 ">
          <SearchBar />
          <CartWithProfileIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
