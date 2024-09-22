import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function FAQ() {
  return (
    <div>
      <div className="px-5 md:px-10 bg-gray-500">
        <div className="flex justify-center gap-x-5 items-center h-20">
          <div className="h-16 w-16 flex items-center bg-cover">
           <Link to="/"><img src="../himalayanjava-logo.png" alt="" /></Link>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-16 py-5">
        <h2 className='text-3xl font-bold text-center my-10 pb-10'>Common Questions</h2>
        <div className="mb-5">
          <h2 className="text-lg font-semibold mb-2">1. What is Himalayan Java Coffee?</h2>
          <p className="text-sm ml-5">Himalayan Java Coffee is a specialty coffee brand that brings you premium coffee made from the finest coffee beans sourced from the Himalayan region. Our mission is to provide an exceptional coffee experience through our unique flavors, ethical sourcing practices, and dedication to quality.</p>
        </div>
        <div className="mb-5">
          <h2 className="text-lg font-semibold mb-2">2. What types of coffee do you offer?</h2>
          <p className="text-sm ml-5">We offer a wide variety of coffee types, including single-origin coffee, blends, espresso, cold brew, and flavored options. Whether you prefer a strong espresso, a smooth latte, or a refreshing cold brew, we have something for everyone.</p>
        </div>
        <div className="mb-5">
          <h2 className="text-lg font-semibold mb-2">3. Can I buy Himalayan Java Coffee beans online?</h2>
          <p className="text-sm ml-5">Absolutely! You can purchase our coffee beans and other products directly from our website. We offer a variety of roasts and grind levels, so you can choose the perfect option for your home brewing method.</p>
        </div>
        <div className="mb-5">
          <h2 className="text-lg font-semibold mb-2">4. How can I contact customer service?</h2>
          <p className="text-sm ml-5">You can reach our customer service team via the contact form on our website, by email, or by phone. Our team is available to assist you with any questions or concerns you may have.</p>
        </div>
        <div className="mb-5">
          <h2 className="text-lg font-semibold mb-2">5. Where do you source your coffee beans from?</h2>
          <p className="text-sm ml-5">We source our coffee beans from the Himalayan region, known for its rich soil and ideal climate for growing high-quality Arabica coffee. Our beans are carefully handpicked by local farmers and undergo a meticulous selection process to ensure only the best beans are used.</p>
        </div>
      </div>
      <hr className='w-full border-t-[1px] border-gray-400 mt-16' />
      <Footer/>
    </div>
  );
}

export default FAQ;
