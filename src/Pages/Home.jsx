import { useEffect, useRef, useState } from 'react'
import Header from "../Components/Header";
import Services from "../Pages/Services";
import Location from "../Pages/Location";
import Menu from "../Pages/Menu";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const outletRef = useRef(null);
  const menuRef = useRef(null);

  const scrollToSection = (section) => {
    let sectionRef = null;
    if (section === 'home') homeRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (section === 'about') aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (section === 'services') servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (section === 'outlets') outletRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (section === 'menu') menuRef.current.scrollIntoView({ behavior: 'smooth' });

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section '${section}' does not exist.`);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="w-full h-[100vh] flex flex-col bg-zinc-200">
        <Header scrollToSection={scrollToSection}/>
        <div className="flex flex-1 mt-[-112px]" ref={homeRef}>
          <div className="w-0 md:w-[55%] bg-gray-100 flex flex-col  justify-center md:px-10">
            <h2 className="text-5xl font-bold text-orange-900 my-10 md:block hidden">
              From Crop to Cup
            </h2>

            <p className="text-lg text-gray-500 font-semibold mb-10 md:block hidden">
              Himalayan Java Coffee Beans are grown locally and are roasted to
              perfection in the ideal himalayan air. It is then packaged
              immediately and rushed off to our outlets which ensures we deliver
              the best coffee experience possible for all of our customers
            </p>

            <button className="text-xl bg-orange-900 px-3 py-2 w-[120px] rounded-sm text-white mb-10" onClick={() => scrollToSection('menu')}>
              See Menu
            </button>

            <ul className="flex gap-5 text-xl">
            <li>
                <Link to="https://www.facebook.com/himalayanjava/"><FaFacebookF /></Link>  
                </li>
              <li>
                <Link to="https://www.youtube.com/@himalayanjavacoffee5180"><FaYoutube /></Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/himalayanjava/"><FaInstagram /></Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[45%] relative bg-[url('../coffee-image.jpg')] bg-cover bg-right z-10">
            <div className="px-12 pt-[50%] flex flex-col md:hidden text-white">
              <h2 className="text-3xl font-bold my-8">From Crop to Cup</h2>
              <p className="text-[12px] mb-10">
                Himalayan Java Coffee Beans are grown locally and are roasted to
                perfection in the ideal himalayan air. It is then packaged
                immediately and rushed off to our outlets which ensures we
                deliver the best coffee experience possible for all of our
                customers
              </p>

              <button className="text-lg bg-orange-900 p-2 w-[110px] rounded-sm mb-10" onClick={() => scrollToSection('menu')}>
                See Menu
              </button>

              <ul className="flex gap-3 text-lg">
                <li>
                <Link to="https://www.facebook.com/himalayanjava/"><FaFacebookF /></Link>  
                </li>
                <li>
                <Link to="https://www.youtube.com/@himalayanjavacoffee5180"><FaYoutube /></Link>
                </li>
                <li>
                <Link to="https://www.instagram.com/himalayanjava/"><FaInstagram /></Link>
                </li>
              </ul>
            </div>

            <div className="w-full absolute bottom-0 h-16 bg-orange-950 opacity-80 flex text-white items-center gap-5 px-14 text-sm md:text-[16px]">
              <h2>
                <span className="font-bold">7</span> years experience
              </h2>
              <h2>
                <span className="font-bold">25k+</span> coffee consumed
              </h2>
              <h2>
                <span className="font-bold">35k+</span> customers
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Services ref={servicesRef}/>
      <Location ref={outletRef}/>
      <Menu ref={menuRef}/>
      <Testimonial/>
      <Footer scrollToSection={scrollToSection}/>
    </div>
  );
}

export default Home
