import { CircleUser, ShoppingCart, UserCheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/contexts/CartContext";
import { cn } from "@/app/lib/utils";
import { useHeaderMessageContext } from "@/app/contexts/HeaderMessageContext";
import { useAuthContext } from "@/app/contexts/AuthContext";
const CartWithProfileIcon = () => {
  const { getTotalItems } = useCart();
  const { user } = useAuthContext();
  const totalItems = getTotalItems();
  const headerMessageContext = useHeaderMessageContext();
  const router = useRouter();
  return (
    <div className=" flex gap-4 justify-center items-center ">
      <button className="cursor-pointer" onClick={() => router.push("/cart")}>
        <div>
          {totalItems > 0 && (
            <p
              className={cn(
                "absolute right-15 md:right-19 bg-red-400 text-white rounded-full h-4 w-4 text-xs font-semibold p-1 justify-center items-center flex",
                headerMessageContext.headerMessageStatus ? "top-14 " : "top-4 "
              )}
            >
              {totalItems}
            </p>
          )}
          <ShoppingCart size={24} className="" />
        </div>
      </button>
      <button
        className="cursor-pointer"
        onClick={() => router.push("/profile")}
      >
        {user ? (
          <UserCheckIcon size={24} className="text-green-500 font-extrabold" />
        ) : (
          <CircleUser size={24} className="" />
        )}
      </button>
    </div>
  );
};

export default CartWithProfileIcon;
