"use client";
import React from "react";
import Button from "@/components/shared/Button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  email: z.string().email({ message: "Email není zadaný ve správném tvaru." }),
  name: z.string().min(1, { message: "Jméno musí být vyplněné." }),
  phone: z
    .string()
    .max(14, { message: "Číslo je nejspíše o něco delší, než by mělo být." })
    .optional(),
  message: z.string().min(10, { message: "Zpráva by měla být o něco delší." }),
});

type FormField = z.infer<typeof schema>;
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormField>({
    resolver: zodResolver(schema),
  });

  const handleSend: SubmitHandler<FormField> = async (formData) => {
    function timeout(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await timeout(1000);
    console.log(formData);
    reset();
    toast({
      title: "Odeslání proběhlo v pořádku!",
      description: "Budeme Vás kontaktovat, hned jak to bude možné.",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleSend)}
      className="contact-form flex flex-col gap-2 lg:gap-5 items-center"
    >
      <div className="w-full">
        <input type="email" placeholder="E-mail" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 font-semibold text-[12px] md:text-[14px] xl:text-[18px]  ">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Jméno a Příjmení"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 font-semibold text-[12px] md:text-[14px] xl:text-[18px]  ">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <input type="text" placeholder="Telefon*" {...register("phone")} />
        {errors.phone && (
          <p className="text-red-500 font-semibold text-[12px] md:text-[14px] xl:text-[18px]  ">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <textarea placeholder="Zpráva" {...register("message")}></textarea>
        {errors.message && (
          <p className="text-red-500 font-semibold text-[12px] md:text-[14px] xl:text-[18px]  ">
            {errors.message.message}
          </p>
        )}
      </div>
      <Button
        type="button"
        buttonText={!isSubmitting ? "Odeslat" : "Odesílání"}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default ContactForm;
