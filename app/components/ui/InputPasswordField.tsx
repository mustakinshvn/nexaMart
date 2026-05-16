import { Eye, EyeOff } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { InputField } from "./InputField";


import {
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "@/app/lib/utils";

type Props<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder: string;
  type?: string;
  errorMessage?: string;
  onChange?: () => void;
  className?: string;
  isPasswordVisible: boolean;
  setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;

};

export const InputPasswordField = <T extends FieldValues>({
  isPasswordVisible,
  setIsPasswordVisible,
  name,
  register,
  placeholder,
  onChange,
  className,
  errorMessage
}: Props<T>) => {
  return (
    <div>
      <div className={cn("w-full flex items-center gap-2 border-b border-gray-300 relative", errorMessage && "border-red-500", className)}>
      <InputField 
        register={register}
        name={name}
        placeholder={placeholder}
        type={isPasswordVisible ? "text" : "password"}
        onChange={onChange}
      />
        <button
          type="button"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          className="absolute right-2 text-gray-500"
        >
          {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
  </div>
  );
};
