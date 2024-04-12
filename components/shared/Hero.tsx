import React from "react";
import Button from "@/components/shared/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex max-md:flex-col items-center justify-center  text-center gap-10 pt-[75px] sm:pt-[85px] md:pt-8 pb-5">
      <div className="w-full flex-col flex  items-center gap-4 xl:gap-6">
        <h1>
          Zahradnictví <span className="text-light-green">u Kropičky</span>
        </h1>
        <p className="main-text w-[90%] ">
          Jsme vášniví zahradníci s mnohaletými zkušenostmi, kteří se s vámi
          rádi podělí o své znalosti a lásku k rostlinám. Naším cílem je
          zpřístupnit zahradničení všem a inspirovat vás k vytvoření krásné a
          úrodné zahrady.
        </p>
        <Button type="button" buttonText="O Nás" scrollTo="about" />
      </div>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          loading="lazy"
          fill
          className="object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
