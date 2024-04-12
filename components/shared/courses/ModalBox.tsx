import React from "react";
import Button from "@/components/shared/Button";

interface ModalBoxProps {
  item: {
    id: number;
    title: string;
    price: number;
    points: string[];
  };
}
const ModalBox = ({ item }: ModalBoxProps) => {
  return (
    <div className="w-[75%] min-w-[270px]  max-w-[300px] sm:max-w-[350px]  min-h-fit sm:min-h-[300px]  bg-white border-[1px] border-black rounded-tr-[14px] rounded-bl-[14px] flex flex-col items-center p-2 sm:px-5 sm:py-4 gap-2">
      {/*top*/}
      <div className="w-full min-h-[70px] bg-light-green rounded-tr-[12px] rounded-bl-[12px] flex flex-col items-center justify-around">
        <h1 className="text-white">{item.title}</h1>
        <hr className="w-[80px]" />
        <p className="text-dark-green font-ptSans font-bold text-[20px]">
          {item.price},- Kč{" "}
          <span className="font-ptSans font-normal text-white text-[18px]">
            / měs
          </span>
        </p>
      </div>

      {/*list*/}
      <ul className="flex-1 pl-2 space-y-1">
        {item.points.map((link, index) => (
          <li
            className="bg-[url('/icons/kvetinac.svg')] bg-[length:22px_22px] bg-no-repeat bg-left px-6"
            key={index}
          >
            {link}
          </li>
        ))}
      </ul>

      {/*button*/}
      <Button type="link" href={`/cart/${item.id}`} buttonText="Vybrat" />
    </div>
  );
};

export default ModalBox;
