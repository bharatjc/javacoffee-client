import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FcSearch } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setVisitorName } from '../redux/Slices/visitorSlice';

function Header({ scrollToSection }) {
  const dispatch = useDispatch()
 const [menu, setMenu] = useState(false)
 const [visitor, setVisitor] = useState("")

 function featureMe(e){
  e.preventDefault()
  axios.post(`https://himalayanjava-server.onrender.com/visitor`,{visitor}).then((res)=>{
    console.log(res.data)
    dispatch(setVisitorName(res.data.visitor))
  }).catch((err) => {
    if (err.response && err.response.data && err.response.data.errors) {
      toast.error(err.response.data.errors.message, { autoClose: 2000 });
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
      });
    }
  });
  setVisitor("")
 }

  return (
    <ul className='px-10 ml-0 md:ml-[250px] h-28 bg-slate-400 flex justify-between md:justify-center gap-12 items-center bg-transparent text-lg text-white z-20'>
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
      <input type="text" value={visitor}
            onChange={(e) => setVisitor(e.target.value)}
       className='w-[100px] md:w-[100px] outline-none bg-transparent text-sm px-3'/>
      <div className='cursor-pointer flex items-center gap-1 border-[1px] rounded-lg p-[2px]' onClick={featureMe}>
      <FcSearch className='text-white text-2xl border-r-[1px] border-gray-400'/>
      <p>FeatureMe</p>
      </div>
      </li>
    </ul>
  )
}

export default Header
