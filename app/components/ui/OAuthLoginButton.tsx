import { cn } from "@/app/lib/utils";
import Image from "next/image";
type Props = {
  className?: string;
};
export const OAuthLoginButton = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-4 text-nowrap items-center justify-center",
        className
      )}
    >
      <button className="w-full flex items-center hover:bg-gray-100 cursor-pointer justify-center border-2 border-gray-300 p-2 h-10 rounded-md">
        <div className="flex w-full justify-center items-center gap-2">
          <Image
            src="/Icon-Google.png"
            alt="Google Icon"
            width={12}
            height={12}
            className="h-4 w-4"
          />
          <span className="text-sm text-gray-500">Sign in with Google</span>
        </div>
      </button>
    </div>
  );
};
