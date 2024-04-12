import React from "react";
import Link from "next/link";

const CartFooter = () => {
  return (
    <footer className="w-fit mx-auto flex flex-col items-center gap-3 pb-2">
      <h1>
        Zahradnictví <span className="text-light-green">u Kropičky</span>
      </h1>
      <div className="flex max-lg:flex-col items-center gap-1 lg:gap-5 text-center">
        <p className="whitespace-nowrap main-text lg:order-1 lg:w-[300px]">
          Praha 4, Nová Ulice 125/3, 105 00
        </p>
        <p className="main-text lg:order-3 lg:w-[300px]">
          zahradnictvi@kropicka.cz
        </p>
        <p className="main-text lg:order-2 lg:w-[300px]">+420 605 222 589</p>
      </div>
      <p className="main-text tracking-[3px]">
        @ 2024 Zahradnictví |{" "}
        <Link className="underline italic" href="">
          Matěj Bittner
        </Link>
      </p>
    </footer>
  );
};

export default CartFooter;
