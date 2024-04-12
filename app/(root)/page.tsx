import React from "react";
import Hero from "@/components/shared/Hero";
import Contact from "@/components/shared/contact/Contact";
import About from "@/components/shared/About";
import Footer from "@/components/shared/Footer";

import PricingMain from "@/components/shared/courses/PricingMain";

const Home = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 pb-6">
      <Hero />
      <Contact />
      <div className="flex flex-col pb-6 xl:pt-2 ">
        <PricingMain />
      </div>
      <About />
      {/*<Footer />*/}
    </div>
  );
};

export default Home;
