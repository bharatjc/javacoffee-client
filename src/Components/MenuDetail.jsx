import React from 'react'
import { useDispatch } from "react-redux";
import {addCartItem} from "../redux/Slices/cartSlice"

function MenuDetail({image,name,price,_id}) {
 const dispatch = useDispatch()

  return (
    <div className='w-full h-full flex items-center px-0 md:px-4 rounded-xl'>
    <div className='md:w-full lg:w-[45%] h-24 md:h-28 lg:h-[140px] overflow-hidden bg-cover mr-4'>
    <img src={image} alt="" className='w-[100px] h-full rounded-md'/>
    </div>
    <div className='flex flex-col justify-center'>
    <p className='text-start md:text-lg font-semibold my-1 '>
      {name}
    </p>
    <p className='text-start font-semibold text-slate-400'>Rs. {price}</p>
    <button className='bg-white border-[1px] border-orange-500 px-2 py-1 my-2' onClick={() => {
                  dispatch(addCartItem({ name, price,image,_id}));
       }}>Add to cart</button>
    </div>
  </div>
  )
}

export default MenuDetail
