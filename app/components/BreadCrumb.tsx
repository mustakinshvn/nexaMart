"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

type BreadcrumbProps = {
  homeElement?: { label: string; href: string };
  items: { label: string; href: string }[];
  className?: string;
};

export const Breadcrumb = ({
  homeElement,
  items,
  className,
}: BreadcrumbProps) => {
  const itemsLength = items.length;
  return itemsLength > 0 ? (
    <div className={className}>
      <ul className="flex lg:px-10 py-4 text-md lg:text-xl justify-start items-center text-gray-600 ">
        <li>
          <Link href={homeElement?.href || "/"} className="hover:underline">
            {homeElement?.label || "Home"}
          </Link>
        </li>
        <li>
          <ChevronRight />
        </li>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={cn(
                "px-1 flex items-center hover:underline",
                index === itemsLength - 1 && " text-black hover:no-underline",
              )}
            >
              {index === itemsLength - 1 ? (
                <span>{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
              {itemsLength !== index + 1 && <ChevronRight />}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};
