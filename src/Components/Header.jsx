import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setVisitorName } from '../redux/Slices/visitorSlice';

function Header({ scrollToSection }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(store=> store.cart.value)

 const [menu, setMenu] = useState(false)
 const [visitor, setVisitor] = useState("")

 useEffect(()=>{
  dispatch(setVisitorName(visitor))
 },[visitor])


  return (
    <ul className='px-10 ml-0 md:ml-[230px] h-28 bg-slate-400 flex justify-between md:justify-center gap-12 items-center bg-transparent text-lg text-white z-20'>
      <IoMenu className='md:hidden block text-xl' onClick={()=>{
        setMenu(!menu)
      }}/>

{
  menu && <ul className='w-1/2 h-full bg-red-950 fixed top-0 left-0 py-5 px-2'>
<li className='pl-3 pb-1 mb-5 flex justify-between border-b-[1px]'><p>
  <Link to="/about">About</Link></p> <RxCross2 onClick={()=>{
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
      <li className='flex gap-3 items-center justify-between'>
      <input type="search" value={visitor} placeholder= "search"
            onChange={(e) => setVisitor(e.target.value)}
       className='text-gray-500 w-[100px] md:w-[120px] outline-none bg-transparent text-sm px-3'/>
      <CiSearch className='text-white text-2xl'/>
    <Link to="/cart" className='flex'><BsCart2 className='text-white text-2xl'/>
    <p className="text-[#FB2E86]">({cartItems.length})</p>
    </Link>  
      </li>
    </ul>
  )
}

export default Header
