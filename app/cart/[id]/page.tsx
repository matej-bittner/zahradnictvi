"use client";

import React from "react";
import Button from "@/components/shared/Button";
import { pricingBoxes } from "@/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface CartPageProps {
  params: {
    id: number;
  };
}

const schema = z.object({
  email: z.string().email({ message: "Email není zadaný ve správném tvaru." }),
  name: z.string().min(1, { message: "Jméno musí být vyplněné." }),
  phone: z
    .string()
    .min(1, { message: "Telefon musí být vyplněný." })
    .max(14, { message: "Číslo je nejspíše o něco delší, než by mělo být." }),
  address: z.string().min(1, { message: "Adresa by měla být o něco delší." }),
  variant: z.string(),
});

type FormFields = z.infer<typeof schema>;

const CartPage = ({ params }: CartPageProps) => {
  const course = pricingBoxes.find((x) => x.id === Number(params.id));
  if (!course) {
    return (
      <div className="container flex-1 flex-col flex items-center justify-center text-center gap-8">
        <h1 className="underline">Stránka nenalezena</h1>
        <Button type="link" buttonText="Zpět na hlavní stránku" href="/" />
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const handleCheckout: SubmitHandler<FormFields> = async (checkoutData) => {
    function timeout(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await timeout(1000);
    console.log(checkoutData);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleCheckout)}
      className="flex max-md:flex-col mt-[70px] sm:mt-[80px] md:mt-0 w-full pb-6 flex-1"
    >
      {/*left half*/}
      <div className="bg-light-gray flex-1 h-full flex  items-center justify-center lg:justify-end ">
        {/*left inside div*/}
        <div className="h-fit md:h-[95%] w-[80%] sm:w-[60%] md:w-[94%] max-w-[500px] p-2 lg:mr-5 flex flex-col md:min-h-[400px]">
          {/*buttton*/}
          <div className="w-fit h-[44px] hidden md:block mb-[21px]">
            <Button type="link" href="/" buttonText="Zpět" />
          </div>
          {/*content*/}
          <div className="w-full flex flex-col items-center justify-between gap-6">
            {/*top content*/}
            <div className="w-[140px] lg:w-[160px] h-[100px] bg-white border-2 border-light-green rounded-[14px] flex flex-col items-center justify-around py-2">
              <h1>{course?.title}</h1>
              <p className="font-ptSans text-[20px]">Online Kurz</p>
            </div>
            {/*bottom content*/}
            <div className="w-fit flex-1 flex flex-col gap-3">
              <h1 className="font-ptSans text-center">Možnosti</h1>
              <div className="flex items-center options">
                <input
                  id="1M"
                  type="radio"
                  value="1"
                  {...register("variant")}
                  defaultChecked
                />
                <p className="font-ptSans italic text-[20px]">
                  1 Měsíc - {course.price},-Kč
                </p>
              </div>
              <div className="flex items-center options">
                <input
                  id="3M"
                  type="radio"
                  value="3"
                  {...register("variant")}
                />
                <p className="font-ptSans italic text-[20px]">
                  3 Měsíce - {course.price * 3 * 0.9}-Kč{" "}
                  <span className="text-[16px]">
                    ({(course.price * 3 * 0.9) / 3},-/měs)
                  </span>
                </p>
              </div>
              <div className="flex items-center options">
                <input
                  id="12sM"
                  type="radio"
                  {...register("variant")}
                  value="12"
                />
                <p className="font-ptSans italic text-[20px]">
                  12 Měsíců - {course.price * 12 * 0.8}-Kč{" "}
                  <span className="text-[16px]">
                    ({(course.price * 12 * 0.8) / 12},-/měs)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*right half*/}

      <div className="flex-1 h-full flex  items-center justify-center lg:justify-start ">
        {/*right inside div*/}
        <div className="h-fit md:h-[95%] w-[80%] sm:w-[60%] md:w-[94%] max-w-[500px] p-2 lg:ml-5 flex flex-col  md:min-h-[400px]">
          {/*content*/}
          <div className="w-full h-full flex flex-col items-center justify-between gap-2 md:pt-[15px] flex-1">
            <h1>Vaše údaje:</h1>

            <div className="cart-form flex flex-col gap-3  h-full w-full flex-1 ">
              <div className="mx-auto flex flex-col">
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-center font-semibold text-[12px] md:text-[14px] xl:text-[16px]  ">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mx-auto flex flex-col">
                <input
                  type="text"
                  placeholder="Jméno a Příjmení"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-center font-semibold text-[12px] md:text-[14px] xl:text-[16px]  ">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mx-auto flex flex-col">
                <input
                  type="text"
                  placeholder="Telefon"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-center font-semibold text-[12px] md:text-[14px] xl:text-[16px]  ">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="mx-auto flex flex-col">
                <input
                  type="text"
                  placeholder="Adresa"
                  {...register("address")}
                />
                {errors.address && (
                  <p className="text-red-500 text-center font-semibold text-[12px] md:text-[14px] xl:text-[16px]  ">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="w-full h-[80px] md:h-[44px] flex max-md:justify-between items-end md:justify-end flex-1">
                <div className=" w-fit  md:hidden">
                  <Button type="link" href="/" buttonText="Zpět" />
                </div>
                <div className=" w-fit">
                  <Button
                    type="button"
                    buttonText={
                      !isSubmitting ? "Pokračovat" : "Přesměrování..."
                    }
                    isSubmitting={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartPage;
