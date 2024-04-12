"use client";
import React from "react";
import Link from "next/link";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";

interface ButtonProps {
  type: "button" | "link";
  href?: string;
  buttonText: string;
  isSubmitting?: boolean;
  scrollTo?: string;
}
const Button = ({
  buttonText,
  isSubmitting,
  type,
  href,
  scrollTo,
}: ButtonProps) => {
  if (type === "button") {
    let scrollWhere = () => {};
    if (scrollTo) {
      scrollWhere = useSmoothScrollTo(scrollTo);
    }

    return (
      <button
        onClick={() => scrollWhere()}
        disabled={isSubmitting}
        className={`${!isSubmitting ? "text-white bg-light-green" : "text-dark-green bg-light-green-secondary"} min-w-[96px] sm:min-w-[130px]  h-[30px] sm:h-[38px] md:h-[44px] px-2 font-poppins font-semibold text-[18px] text-center flex items-center justify-center rounded-lg sm:text-[20px] hover:scale-105 transition`}
      >
        {buttonText}
      </button>
    );
  }

  if (type === "link") {
    let url;
    if (href === undefined) {
      url = "/";
    } else {
      url = href;
    }
    return (
      <Link
        href={url}
        className="text-white bg-light-green min-w-[96px] sm:min-w-[130px] h-[30px] sm:h-[38px] md:h-[44px] px-2 font-poppins font-semibold text-[18px] text-center flex items-center justify-center rounded-lg sm:text-[20px] hover:scale-105 transition"
      >
        {buttonText}
      </Link>
    );
  }
};

export default Button;
