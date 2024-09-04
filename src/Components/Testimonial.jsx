import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function Testimonial() {
  return (
    <div className="relative h-[100vh] w-full flex items-center  px-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('../testimonial.avif')] bg-cover opacity-85"></div>

<div className="w-full flex flex-col md:flex-row items-center justify-between">
<div className="relative w-full md:w-[50%] lg:w-[25%] h-full flex flex-col justify-center lg:ml-20 mb-10">
        <div className="relative w-full shadow-lg shadow-orange-200">
          <img
            src="../messi.webp"
            alt="Lionel Messi"
            className="rounded-xl"
          />
        </div>
        <div className="relative">
        <h2 className="text-white text-xl font-semibold text-center mt-5 md:mt-14 mb-2">
          Lionel Messi, Footballer
        </h2>
        <p className="text-3xl text-amber-500 text-center">★ ★ ★ ★ ★</p>
        </div>
      </div>

         <div className="relative w-full md:w-[60%] h-full text-white md:px-10">
          <div className="flex justify-start">
          <RiDoubleQuotesL className="text-xl md:text-5xl"/>
          </div>
      
      <p className="px-5 text-sm lg:text-3xl md:text-xl font-bold">The Himalayan Java Coffee house had the best coffee around Pokhara. The shop is quiet, clean and has an outdoor sitting area to enjoy your coffee and people watch. The staff are very friendly and very helpful. The muffins here are also very good.</p>
      <div className="flex justify-end">
      <RiDoubleQuotesR className="text-xl md:text-5xl"/>
      </div>
     
      </div>
</div>
     
    </div>
  );
}

export default Testimonial;
