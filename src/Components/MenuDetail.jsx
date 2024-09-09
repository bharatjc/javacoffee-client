import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MenuDetail({name,image,price,loading}) {
  return (
    <div>
      <div className='w-full h-full flex items-center px-0 md:px-4 rounded-xl'>
      <div className='md:w-full lg:w-[45%] h-24 md:h-28 lg:h-[140px] overflow-hidden bg-cover mr-4'>
      {
        loading? <Skeleton className="rounded-xl w-full h-full" />:<img src={image} alt="" className='w-[100px] h-full rounded-md'/>
      }  
      </div>
      <div className='flex flex-col justify-center'>
      <h2 className='text-center md:text-lg font-semibold my-1 '>{
        loading?<Skeleton className="rounded-xl w-[100px] h-full" />:name}</h2>
      <p className='text-start font-semibold text-slate-400'> {
        loading?<Skeleton className="rounded-xl w-full h-full" />:    `Rs. ${price}`}</p>
      </div>
    </div>
    </div>
  )
}

export default MenuDetail
