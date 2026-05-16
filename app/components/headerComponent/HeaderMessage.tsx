"use client";
import { useHeaderMessageContext } from "@/app/contexts/HeaderMessageContext";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
const HeaderMessage = () => {
  const router = useRouter();
  const messageContext = useHeaderMessageContext();

  return (
    <>
      {messageContext.headerMessageStatus && (
        <div className="bg-black w-full text-gray-200 flex items-center h-10 text-sm justify-center relative ">
          <div className="flex flex-row  gap-2 absolute p-1">
            <p className="font-light text-gray-300">
              SignUp and get 20% off to your first order.
            </p>
            <button
              className="underline cursor-pointer hover:text-gray-300"
              onClick={() => {
                messageContext.setHeaderMessageStatus(false);
                router.push("/sign-up");
              }}
            >
              Sign Up
            </button>
          </div>

          <button
            onClick={() => messageContext.setHeaderMessageStatus(false)}
            className=" absolute right-2 sm:right-5 md:right-7 xl:right-9 flex  font-bold text-md cursor-pointer hover:text-gray-400"
          >
            <XIcon size={18} />
          </button>
        </div>
      )}
    </>
  );
};

export default HeaderMessage;
