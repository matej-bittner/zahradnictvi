"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navData } from "@/constants";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";

const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-4 xl:gap-6">
      <div className=" xl:grid-cols-3 md:grid-cols-2 md:grid max-md:flex-col-reverse max-md:flex w-full max-xl:gap-6 justify-items-center min-h-[240px]">
        {/*logo*/}
        <div className="flex md:flex-col md:gap-6 items-center justify-center w-full md:border-r-2 xl:border-0 border-black ">
          <div className="w-[166px] h-[70px] relative">
            <Image src="/icons/logo.svg" alt="logo" fill />
          </div>
          <p className="main-text whitespace-nowrap hidden md:block">
            Praha 4, Nová Ulice 125/3, 105 00
          </p>
        </div>

        {/*center*/}
        <div className="hidden xl:flex items-center gap-6 justify-center border-x-2 border-black w-full">
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
        </div>

        {/*socials*/}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex w-fit gap-[32px] pb-6">
            <Link
              href=""
              className="w-[55px] xl:w-[65px] aspect-square relative"
            >
              <Image src="/icons/instagram.svg" alt="instagram" fill />
            </Link>
            <Link
              href=""
              className="w-[70px] xl:w-[80px] aspect-square relative"
            >
              <Image src="/icons/facebook.svg" alt="facebook" fill />
            </Link>
            <Link
              href=""
              className="w-[55px] xl:w-[65px] aspect-square relative"
            >
              <Image src="/icons/twitter.svg" alt="twitter" fill />
            </Link>
          </div>
          <p className="main-text whitespace-nowrap">+420 605 222 589</p>
          <p className="main-text whitespace-nowrap">
            zahradnictvi@kropicka.cz
          </p>
          <p className="main-text whitespace-nowrap md:hidden">
            Praha 4, Nová Ulice 125/3, 105 00
          </p>
        </div>
      </div>
      <div>
        <p className="main-text tracking-[3px]">
          @ 2024 Zahradnictví |{" "}
          <Link className="underline italic" href="">
            Matěj Bittner
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
