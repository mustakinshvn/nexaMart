"use client";

import { Button } from "@/app/components/ui/Button";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInSchema, UserLogInData } from "../schemas/userSchema";
import { NavigateButton } from "@/app/components/ui/NavigateButton";
import { useState } from "react";
import { logIn } from "../action";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { useHeaderMessageContext } from "@/app/contexts/HeaderMessageContext";
import { useRouter } from "next/navigation";
import { InputField } from "@/app/components/ui/InputField";
import { InputPasswordField } from "@/app/components/ui/InputPasswordField";

enum LoginMessage {
  SUCCESS = "Login successful",
  ERROR = "Wrong username or password",
}

const LoginForm = () => {
  const {
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UserLogInData>({
    resolver: zodResolver(logInSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const { userLogin } = useAuthContext();
  const headerMessageContext = useHeaderMessageContext();
  const router = useRouter();

  return (
    <Form
      control={control}
      onSubmit={async ({ data }) => {
        try {
          const response = await logIn(data);
          const token = response?.token;
          const message = response?.message;
          if (token) {
            await userLogin(token);
            headerMessageContext.setHeaderMessageStatus(false);
            setShowMessage(message);
            router.push("/profile");
          } else {
            setShowMessage(message);
          }
        } catch {
          setShowMessage(LoginMessage.ERROR);
        }
      }}
      className="w-full flex flex-col gap-4 "
    >
      <InputField
        register={register}
        name="username"
        placeholder="Username"
        onChange={() => setShowMessage(null)}
        errorMessage={errors.username?.message}
      />

      <InputPasswordField
        register={register}
        name="password"
        placeholder="Password"
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
        onChange={() => setShowMessage(null)}
        errorMessage={errors.password?.message}
      />

      {showMessage === LoginMessage.SUCCESS ? (
        <p className="text-green-500 text-sm">{showMessage}</p>
      ) : (
        showMessage && <p className="text-red-500 text-sm">{showMessage}</p>
      )}

      <div className="flex flex-wrap justify-center items-center lg:justify-between w-full">
        <Button
          label={isSubmitting ? "Logging in..." : "Log In"}
          className="rounded-md bg-red-600 hover:bg-red-800 w-full lg:w-1/3  "
        />

        <NavigateButton
          label="Forgot password?"
          navigateTo="/forgot-password"
          className="bg-white hover:bg-white border-0 text-red-600 hover:text-red-900"
        />
      </div>
    </Form>
  );
};

export default LoginForm;
