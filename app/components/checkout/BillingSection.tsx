"use client";

import { Form, useForm } from "react-hook-form";
import { InputField } from "../ui/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BillingSchema,
  UserBillingData,
} from "@/app/(checkout)/checkout/schemas/billingSchemas";
import { Button } from "../ui/Button";
import { useState } from "react";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/contexts/CartContext";

type BillingSectionProps = {
  onClick?: () => void;
};

export const BillingSection = ({ onClick }: BillingSectionProps) => {
  const {
    register,
    control,
    formState: { isSubmitting, errors },
  } = useForm<UserBillingData>({
    resolver: zodResolver(BillingSchema),
  });

  const { user } = useAuthContext();
  const { clearCart } = useCart();

  const [isSaveInfoChecked, setIsSaveInfoChecked] = useState(false);
  const [billingAddress, setBillingAddress] = useState<string | null>(
    typeof window !== "undefined"
      ? localStorage.getItem("billingAddress")
      : null,
  );

  const router = useRouter();

  return (
    <div className="w-full md:w-2/3 flex flex-col gap-5 px-3 ">
      <Form
        control={control}
        onSubmit={async ({ data }) => {
          if (isSaveInfoChecked) {
            localStorage.setItem("billingAddress", data.address ?? "");
            setBillingAddress(data.address ?? "");
          }
          clearCart();
          router.push("/orderComplete");
        }}
        className=" h-fit w-full flex flex-col gap-4  "
      >
        <InputField
          name="name"
          register={register}
          errorMessage={errors?.name?.message}
          label="Name"
          className="bg-gray-100 border-none "
          defaultValue={user?.username || ""}
        />
        <InputField
          name="email"
          register={register}
          errorMessage={errors?.email?.message}
          className="bg-gray-100 border-none"
          label="Email"
          defaultValue={user?.email || ""}
        />
        <InputField
          name="address"
          register={register}
          errorMessage={errors?.address?.message}
          label="Address"
          className="bg-gray-100 border-none"
          defaultValue={billingAddress || user?.address.city || ""}
        />
        <InputField
          name="mobile"
          register={register}
          errorMessage={errors?.mobile?.message}
          label="Mobile"
          className="bg-gray-100 border-none"
          defaultValue={user?.phone || ""}
        />
        <Button
          label={isSubmitting ? "Placing order..." : "Place Order"}
          className="  rounded-md bg-red-600 hover:bg-red-800 w-full "
          onClick={onClick}
        />
      </Form>
      <label className="flex items-center gap-4 md:gap-2 ">
        <input
          type="checkbox"
          checked={isSaveInfoChecked}
          onChange={() => setIsSaveInfoChecked((prev) => !prev)}
          className="size-8 md:size-5 "
        />
        <p className="text-gray-500 text-lg ">
          Save this information for faster checkout next time
        </p>
      </label>
    </div>
  );
};
