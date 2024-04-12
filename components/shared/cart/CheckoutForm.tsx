"use client";
import React from "react";
import Button from "@/components/shared/Button";

const CheckoutForm = () => {
  const handleContactData = () => {};

  return (
    <form
      onSubmit={handleContactData}
      className="cart-form flex flex-col gap-3  h-full w-full flex-1"
    >
      <input type="email" placeholder="E-mail" className="" />
      <input type="text" placeholder="Jméno a Příjmení" />
      <input type="text" placeholder="Telefon" />
      <input type="text" placeholder="Adresa" />
      <div className="w-full h-[80px] md:h-[44px] flex max-md:justify-between items-end md:justify-end flex-1">
        <div className=" w-fit  md:hidden">
          <Button type="link" href="/" buttonText="Zpět" />
        </div>
        <div className=" w-fit   ">
          <Button type="button" buttonText="Pokračovat" />
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
