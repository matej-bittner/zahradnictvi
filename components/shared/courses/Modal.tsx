"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { IoClose } from "react-icons/io5";

import ModalBox from "@/components/shared/courses/ModalBox";
import { pricingBoxes } from "@/constants";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";
const Modal = () => {
  const pathname = usePathname();
  const search = useSearchParams();
  const modal = search.get("modal");

  // const scrollTo = useSmoothScrollTo("kurzy");
  const scrollTo = useSmoothScrollTo("kurzy", "/");

  useEffect(() => {
    if (modal) {
      const handleResize = () => {
        scrollTo();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [modal]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal, pathname]);

  if (!modal) return null;

  if (modal === "kurzy")
    return (
      <section
        // onClick={() => scrollTo()}
        className="md:hidden z-20 fixed bg-white bg-opacity-70 backdrop-blur-sm inset-0 w-full h-screen overflow-y-auto  flex items-center justify-center"
      >
        <div className=" w-[90%] h-full flex flex-col items-center gap-5">
          <IoClose
            onClick={() => scrollTo()}
            className="absolute right-2 top-2 cursor-pointer "
            size={37}
          />
          <h1 className="pt-2">Kurzy</h1>
          <p className="main-text text-center ">
            Nabízíme širokou škálu kurzů pro všechny úrovně, od základů
            zahradničení a permakultury až po pěstování zeleniny, ovocnářství a
            bylinky. Naše kurzy jsou vedeny zkušenými a vášnivými zahradníky a
            jsou dostupné online, takže se jich můžete účastnit odkudkoli a
            kdykoli. Nabízí videolekce, interaktivní cvičení a praktické návody,
            a zahrnují diskusní fóra, kde se můžete spojit s ostatními studenty
            a sdílet své zkušenosti.
          </p>
          {pricingBoxes.map((item) => {
            return <ModalBox item={item} key={item.id} />;
          })}
          &nbsp;
        </div>
      </section>
    );
};

export default Modal;
