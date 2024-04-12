import React, { ReactNode } from "react";
import Modal from "@/components/shared/courses/Modal";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/shared/Footer";
import "@/app/globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import CartFooter from "@/components/shared/cart/CartFooter";
const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" flex flex-col min-h-screen ">
      <div className="container">
        <Navbar />
      </div>
      {children}

      <CartFooter />
    </main>
  );
};

export default CartLayout;
