import React from "react";
import Button from "@/components/shared/Button";
import Options from "@/components/shared/cart/Options";
import { pricingBoxes } from "@/constants";
import CheckoutForm from "@/components/shared/cart/CheckoutForm";

interface CartPageProps {
  params: {
    id: number;
  };
}
const CartPage = ({ params }: CartPageProps) => {
  const course = pricingBoxes.find((x) => x.id === Number(params.id));

  return (
    <section className="flex flex-col w-full pb-6 flex-1">
      <div className="flex max-md:flex-col mt-[70px] sm:mt-[80px] md:mt-0 w-full">
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
              <div className="w-[140px] h-[100px] bg-white border-2 border-light-green rounded-[14px] flex flex-col items-center justify-around py-2">
                <h1>{course?.title}</h1>
                <p className="font-ptSans text-[20px]">Online Kurz</p>
              </div>
              {/*bottom content*/}
              <div className="w-fit flex-1 flex flex-col gap-3">
                <h1 className="font-ptSans text-center">Možnosti</h1>
                <Options course={course} />
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
              <CheckoutForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
