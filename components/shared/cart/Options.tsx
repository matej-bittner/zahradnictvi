"use client";
import React from "react";

interface OptionsProps {
  course?: {
    id: number;
    title: string;
    price: number;
    points: string[];
  };
}

const Options = ({ course }: OptionsProps) => {
  if (!course) return null;
  return (
    <>
      <div className="flex items-center options">
        <input id="1M" name="option" type="radio" defaultChecked />
        <p className="font-ptSans italic text-[20px]">
          1 Měsíc - {course.price},-Kč
        </p>
      </div>
      <div className="flex items-center options">
        <input
          id="3M"
          name="option"
          type="radio"
          // onChange={(e) => setOption("1")}
        />
        <p className="font-ptSans italic text-[20px]">
          3 Měsíce - {course.price * 3 * 0.9}-Kč{" "}
          <span className="text-[16px]">
            ({(course.price * 3 * 0.9) / 3},-/měs)
          </span>
        </p>
      </div>
      <div className="flex items-center options">
        <input id="12sM" name="option" type="radio" />
        <p className="font-ptSans italic text-[20px]">
          12 Měsíců - {course.price * 12 * 0.8}-Kč{" "}
          <span className="text-[16px]">
            ({(course.price * 12 * 0.8) / 12},-/měs)
          </span>
        </p>
      </div>
    </>
  );
};

export default Options;
