import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Header({ scrollToSection }) {
 const [menu, setMenu] = useState(false)

  return (
    <ul className='px-10 ml-0 md:ml-[250px] h-28 bg-slate-400 flex justify-between md:justify-center gap-12 items-center bg-transparent text-lg text-white z-20'>
      <IoMenu className='md:hidden block text-xl' onClick={()=>{
        setMenu(!menu)
      }}/>

{
  menu && <ul className='w-1/2 h-full bg-red-950 fixed top-0 left-0 py-5 px-2'>
<li className='pl-3 pb-1 mb-5 flex justify-between border-b-[1px]'><p>About</p> <RxCross2 onClick={()=>{
  setMenu(!menu)
}}/></li>
<li className='pl-3 pb-1 mb-5 border-b-[1px]'><button onClick={() => scrollToSection('services')}>Services</button> </li>
<li className='pl-3 pb-1 mb-5 border-b-[1px]'><button onClick={() => scrollToSection('outlets')}>Outlets</button> </li>
<li className='pl-3 pb-1 mb-5 border-b-[1px]'>
  <Link to="/contact">Contact</Link></li>
  </ul>
}

      <li className='hidden md:block text-gray-500 cursor-pointer'><Link to="/about">About</Link></li>
      <li className='hidden md:block text-gray-500 cursor-pointer'> <button onClick={() => scrollToSection('services')}>Services</button></li>
      <li className='hidden lg:block h-[74px] w-[70px] bg-cover cursor-pointer'>
      <button onClick={() => scrollToSection('home')}>
      <img src="../himalayanjava-logo.png" alt="" className='w-full h-full'/>
        </button> 
      </li>
      <li className='hidden md:block cursor-pointer'><button onClick={() => scrollToSection('outlets')}>Outlets</button></li>
      <li className='hidden md:block cursor-pointer'>
        <Link to="/contact">Contact</Link></li>
      <li className='flex gap-3 items-center'>
      <input type="search" className='w-[100px] md:w-full outline-none bg-transparent text-sm px-3'/>
      <FiSearch className='text-white text-xl'/>
      </li>
    </ul>
  )
}

export default Header
