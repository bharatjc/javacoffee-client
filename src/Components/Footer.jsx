import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer({ scrollToSection }) {
  return (
    <div>
      <div className="p-10 md:p-20 flex flex-col md:flex-row justify-between">
        <div className="w-[40%] flex flex-col md:flex-row justify-between">
          <ul className="text-lg text-gray-500 font-semibold mb-10 md:mb-0">
            <li> <button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><Link to="/about">About</Link></li>
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button onClick={() => scrollToSection('menu')}>Menu</button></li>
            <li><Link to="faqs">FAQs</Link></li>
            <li><Link to="/review">Send Review</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="mb-10 md:mb-0">
            <h2 className="text-2xl font-bold mb-5">Contact</h2>
            <p className="text-lg text-gray-500">
              Kathmandu, Nepal <br /> info@himalayanjava.com <br /> 01-560525
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] bg-cover">
          <img
            src="../googlemap.jpg"
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center px-10 md:px-20 py-5">
        <p className="text-gray-500 text-[14px] md:text-sm">Copyright @ 2024 Himalayan Java</p>
        <ul className="flex gap-2 md:gap-3 text-sm md:text-2xl">
         <Link to="https://www.facebook.com/himalayanjava/"><FaFacebookF className="text-blue-700" /></Link> 
         <Link to="https://www.youtube.com/@himalayanjavacoffee5180"><FaYoutube className="text-red-600" /></Link> 
          <Link to="https://www.instagram.com/himalayanjava/"><FaInstagram className="text-pink-600" /></Link>
        </ul>
        <h2 className="hidden md:block text-xl font-semibold text-gray-500">
          Created by Brandbuilder
        </h2>
      </div>
    </div>
  );
}

export default Footer;
