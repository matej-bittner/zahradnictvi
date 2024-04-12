import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="text-center flex flex-col items-center gap-4 xl:gap-6"
    >
      <h1>O Nás</h1>
      <p className="main-text w-[90%]">
        Jsme vášniví zahradníci s mnohaletými zkušenostmi, kteří se s vámi rádi
        podělí o své znalosti a lásku k rostlinám. Naším cílem je zpřístupnit
        zahradničení všem a inspirovat vás k vytvoření krásné a úrodné zahrady.
        Nabízíme širokou škálu online kurzů zahradničení, které vás provedou
        všemi aspekty péče o rostliny, od výsadby a zalévání až po hnojení a
        ochranu před škůdci.
      </p>
    </section>
  );
};

export default About;
