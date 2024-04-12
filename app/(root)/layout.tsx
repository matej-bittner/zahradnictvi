import React, { ReactNode } from "react";
import Modal from "@/components/shared/courses/Modal";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import "../globals.css";
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
      <Modal />
      <Toaster />
    </main>
  );
};

export default RootLayout;
