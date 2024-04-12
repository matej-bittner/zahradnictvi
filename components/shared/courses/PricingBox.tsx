"use client";
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Button from "@/components/shared/Button";

interface PricingBoxProps {
  item: {
    id: number;
    title: string;
    price: number;
    points: string[];
  };
  isActive: boolean;
  click: () => void;
}
const PricingBox = ({ item, isActive, click }: PricingBoxProps) => {
  return (
    <div
      onClick={click}
      // @ts-ignore
      id={`box-${item.id}`}
      className={cn("all-box max-md:relative", {
        "md:scale-105 lg:scale-110": isActive,
      })}
    >
      {/*type*/}
      <div
        className={`${!isActive ? "bg-light-green" : "bg-dark-green"} w-full h-[115px]  rounded-tl-[20px] rounded-br-[20px] flex flex-col items-center justify-center gap-2`}
      >
        <h1 className="text-white">{item.title}</h1>
        <hr className="w-[110px]" />
        <p
          className={`${!isActive ? "text-black" : "text-light-green"} font-ptSans font-bold text-[20px]`}
        >
          {item.price},- Kč{" "}
          <span className="font-ptSans font-normal text-white text-[18px]">
            / měs
          </span>
        </p>
      </div>
      {/*main*/}

      <ul className="pricing-content pt-4 space-y-2 flex-1">
        {item.points.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>

      {/*button*/}
      <div className="hidden w-full text-center md:flex ">
        <Link
          className="font-poppins font-medium text-[26px] mx-auto"
          href={`/cart/${item.id}`}
        >
          ZVOLIT
        </Link>
      </div>
      <div className="absolute md:hidden w-[105%] h-[150px]  -bottom-3 -left-[2.5%] flex items-end pb-4 justify-center bg-gradient-to-b from-transparent to-light-green ">
        <Button type="link" href="?modal=kurzy" buttonText="Více o kurzech" />
      </div>
    </div>
  );
};

export default PricingBox;
