"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import Image from "next/image";
import { navData } from "@/constants";
import Link from "next/link";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";

const MobileNav = () => {
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            className="md:hidden"
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={33}
            height={25}
          />
        </SheetTrigger>
        <SheetContent className="bg-white text-black font-ptSans flex flex-col gap-16">
          <SheetTitle className="relative w-full h-[70px]">
            <Image src="/icons/logo.svg" alt="logo" fill />
          </SheetTitle>

          <SheetClose className="w-full flex flex-col items-center gap-4 flex-1">
            {navData.map((item) => {
              const scrollTo = useSmoothScrollTo(item.href);
              return (
                <p
                  onClick={() => scrollTo()}
                  className="font-comfortaa font-semibold text-[22px] flex cursor-pointer"
                  key={item.title}
                >
                  {item.title}
                </p>
              );
            })}
          </SheetClose>
          <div className="h-fit  flex flex-col items-center justify-center w-full gap-4 pb-4">
            <div className="flex w-fit gap-[25px] pb-6 ">
              <Link href="" className="w-[45px]  aspect-square relative">
                <Image src="/icons/instagram.svg" alt="instagram" fill />
              </Link>
              <Link href="" className="w-[60px]  aspect-square relative">
                <Image src="/icons/facebook.svg" alt="facebook" fill />
              </Link>
              <Link href="" className="w-[45px]  aspect-square relative">
                <Image src="/icons/twitter.svg" alt="twitter" fill />
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="main-text whitespace-nowrap">+420 605 222 589</p>
              <p className="main-text whitespace-nowrap">
                zahradnictvi@kropicka.cz
              </p>
              <p className="main-text whitespace-nowrap">
                Praha 4, Nová Ulice 125/3, 105 00
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
