import { Button } from "../ui/Button";
import { cn } from "@/app/lib/utils";
import { Mail } from "lucide-react";
import { BoldTitle } from "../ui/BoldTitle";
type Props = {
  className?: string;
};

const FooterNewsletter = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row justify-evenly bg-black rounded-2xl w-5/6 h-80  lg:h-30 items-center p-8 gap-6 z-0",
        className,
      )}
    >
      <BoldTitle
        label="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
        className="w-full lg:w-110 text-center lg:text-left text-white text-3xl "
      />
      <div className="flex flex-col w-2/5 gap-3 justify-center items-center">
        <div className="bg-white rounded-full h-8 flex justify-center items-center gap-1 min-w-70 w-full lg:w-70 ">
          <Mail size={16} className="text-gray-500  " />
          <input
            placeholder="Enter your email address"
            className="outline-none py-4 pr-4 text-xs sm:text-sm"
          />
        </div>

        <Button
          label="Subscribe to Newsletter"
          className="bg-white hover:bg-gray-300 min-w-70 w-full lg:w-70 h-8  text-black "
        />
      </div>
    </div>
  );
};

export default FooterNewsletter;
