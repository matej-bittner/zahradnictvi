import React from "react";

import Image from "next/image";
import ContactForm from "@/components/shared/contact/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex max-md:flex-col items-center justify-center md:flex-row-reverse text-center gap-10 scroll-mt-[80px] md:scroll-mt-5"
    >
      <div className="w-full flex-col flex  items-center gap-6 ">
        <h1>Kontaktujte nás</h1>
        <ContactForm />
      </div>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src="/images/contact.jpg"
          alt="contact"
          loading="lazy"
          fill
          className="object-cover "
        />
      </div>
    </section>
  );
};

export default Contact;
