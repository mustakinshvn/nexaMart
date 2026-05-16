"use client";

import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { cn } from "@/app/lib/utils";

type InputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  type?: string;
  onChange?: () => void;
  className?: string;
  errorMessage?: string;
  label?: string;
  defaultValue?: string;
};

export function InputField<T extends FieldValues>({
  name,
  register,
  placeholder,
  type = "text",
  onChange,
  className,
  errorMessage,
  label,
  defaultValue,
}: InputFieldProps<T>) {
  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        {...register(name, { onChange })}
        type={type}
        placeholder={placeholder}
        className={cn(
          "w-full border-b border-gray-300 outline-0 p-2",
          errorMessage && "border-red-500",
          className,
        )}
        defaultValue={defaultValue}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
}
