"use client";
import React, { useState } from "react";
import { pricingBoxes } from "@/constants";
import PricingBox from "@/components/shared/courses/PricingBox";

const PricingMain = () => {
  const [chosen, setChosen] = useState(2);
  return (
    <section
      id="kurzy"
      className="flex flex-col gap-4 xl:gap-6 scroll-mt-[80px] md:scroll-mt-5"
    >
      <h1 className="text-center">Kurzy</h1>
      <div className="flex w-full h-fit items-center justify-center sm:grid sm:justify-items-center xl:flex xl:justify-around md:gap-6 lg:gap-10 xl:gap-6">
        {pricingBoxes.map((item) => {
          const isActive = item.id === chosen;
          const click = () => {
            setChosen(item.id);
          };
          return (
            <PricingBox
              key={item.id}
              item={item}
              isActive={isActive}
              click={click}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PricingMain;
