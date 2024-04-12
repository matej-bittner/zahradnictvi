"use client";
import React from "react";
import Image from "next/image";

import { navData } from "@/constants";
import MobileNav from "@/components/shared/navbar/MobileNav";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";
import Link from "next/link";

const Navbar = () => {
  return (
    // <nav className="flex justify-between items-center">
    <nav className="flex justify-between items-center max-md:fixed max-md:w-[100vw] h-[70px] sm:h-[80px] md:h-auto max-md:bg-white max-md:bg-opacity-80 max-md:backdrop-blur-sm max-md:left-0 max-md:px-6 md:px-8 max-md:z-10 ">
      <Link
        href="/"
        className="relative w-[120px] h-[50px] md:w-[133px] md:h-[56px]  lg:w-[166px] lg:h-[70px]"
      >
        <Image src="/icons/logo.svg" alt="logo" fill />
      </Link>
      <div className="flex gap-12">
        {navData.map((item) => {
          const scrollTo = useSmoothScrollTo(item.href);
          return (
            <p
              onClick={() => scrollTo()}
              className="font-comfortaa font-semibold text-[18px] xl:text-[22px] hidden md:flex cursor-pointer"
              key={item.title}
            >
              {item.title}
            </p>
          );
        })}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
