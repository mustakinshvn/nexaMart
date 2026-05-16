import React from "react";
import { AuthDisplayImage } from "../components/auth/AuthDisplayImage";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center px-3 lg:px-5 justify-between gap-2 sm:gap-4 lg:gap-5">
      <AuthDisplayImage />
      <div className="w-full lg:max-w-1/2 md:px-10">{children}</div>
    </div>
  );
}
