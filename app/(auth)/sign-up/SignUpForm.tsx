"use client";

import { Button } from "@/app/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, UserSignUpData } from "../schemas/userSchema";
import { useState, useTransition } from "react";
import { signUp } from "../action";
import { Form } from "react-hook-form";
import { InputField } from "@/app/components/ui/InputField";
import { InputPasswordField } from "@/app/components/ui/InputPasswordField";
import { useRouter } from "next/navigation";

enum Message {
  SUCCESS = "User created successfully",
  ERROR = "Something went wrong. Please try again.",
}

const SignUpForm = () => {
  const {
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<UserSignUpData>({
    resolver: zodResolver(signUpSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  console.log("Form Errors:", errors);
  return (
    <Form
      control={control}
      onSubmit={async ({ data }) => {
        startTransition(async () => {
          const response = await signUp(data);
          setMessage(
            response.message === Message.SUCCESS
              ? Message.SUCCESS
              : Message.ERROR,
          );
          reset();
        });
      }}
      className="w-full flex flex-col gap-4 "
    >
      <InputField
        register={register}
        name="name"
        placeholder="Name"
        onChange={() => setMessage(null)}
        errorMessage={errors?.name?.message}
      />

      <InputField
        register={register}
        name="address"
        placeholder="Address"
        errorMessage={errors?.address?.message}
      />

      <InputField
        register={register}
        name="mobile"
        onChange={() => setMessage(null)}
        placeholder="Mobile"
        errorMessage={errors?.mobile?.message}
      />

      <InputField
        register={register}
        name="email"
        onChange={() => setMessage(null)}
        placeholder="Email"
        errorMessage={errors?.email?.message}
      />
      <InputField
        register={register}
        name="username"
        onChange={() => setMessage(null)}
        placeholder="Username"
        errorMessage={errors?.username?.message}
      />

      <InputPasswordField
        register={register}
        name="password"
        placeholder="Password"
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
        onChange={() => setMessage(null)}
        errorMessage={errors?.password?.message}
      />

      <InputPasswordField
        register={register}
        name="confirmPassword"
        placeholder="Confirm Password"
        isPasswordVisible={isConfirmPasswordVisible}
        setIsPasswordVisible={setIsConfirmPasswordVisible}
        onChange={() => setMessage(null)}
        errorMessage={errors?.confirmPassword?.message}
      />

      {message === Message.SUCCESS ? (
        <>
          <p className="text-green-500 text-sm">{Message.SUCCESS}</p>
        </>
      ) : (
        message && <p className="text-red-500 text-sm">{Message.ERROR}</p>
      )}

      <Button
        disabled={isPending}
        onClick={
          message === Message.SUCCESS ? () => router.push("/log-in") : undefined
        }
        label={isPending ? "Creating..." : "Create Account"}
        className="rounded-md bg-red-600 hover:bg-red-800 w-full min-w-60 "
      />
    </Form>
  );
};

export default SignUpForm;
