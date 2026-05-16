import { Logo } from "./ui/Logo";
import { DescriptionCard } from "./ui/DescriptionCard";
import QuickLinks from "./footerComponents/QuickLinks";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
import PaymentIcons from "./footerComponents/PaymentIcons";
import FooterNewsletter from "./footerComponents/FooterNewsletter";
import { footerQuickLinks } from "../data/footerQuickLinks";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F0F0F0]  p-15 bottom-0 left-0 w-full relative mt-45 lg:mt-20  ">
        <FooterNewsletter className="absolute -top-33 lg:-top-15 left-1/2 -translate-x-1/2 -tanslate-y-0" />
        <div className="flex flex-wrap gap-5 justify-between border-gray-300 cp-8  pb-12 mt-45 lg:mt-20">
          <div className="flex flex-col gap-3 max-w-full    ">
            <Logo />
            <DescriptionCard
              isQuote={false}
              description="We have clothes that suits your style and which you're proud to wear. From women to men."
            />

            <div className="flex flex-row gap-2 sm:gap-3 mt-1">
              <TwitterIcon className="sm:w-8.75 sm:h-8.75 w-7.5 h-7.5 rounded-full p-1.5 sm:p-2 bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer" />
              <FacebookIcon className="sm:w-8.75 sm:h-8.75 w-7.5 h-7.5 rounded-full p-1.5 sm:p-2 bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer" />
              <InstagramIcon className="sm:w-8.75 sm:h-8.75 w-7.5 h-7.5 rounded-full p-1.5 sm:p-2 bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer" />
              <GithubIcon className="sm:w-8.75 sm:h-8.75 w-7.5 h-7.5 rounded-full p-1.5 sm:p-2 bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {footerQuickLinks.map((link, index) => (
            <QuickLinks key={index} title={link.title} links={link.links} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between border-t border-gray-300 ">
          <DescriptionCard
            isQuote={false}
            description="Shop.co © 2000-2023, All Rights Reserved"
          />
          <PaymentIcons />
        </div>
      </footer>
    </>
  );
};

export default Footer;
