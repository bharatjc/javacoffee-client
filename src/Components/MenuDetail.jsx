import React from 'react'

function MenuDetail({name,image,price}) {
  return (
    <div>
      <div className='w-full h-full flex items-center px-0 md:px-4 rounded-xl'>
      <div className='md:w-full lg:w-[45%] h-24 md:h-28 lg:h-[140px] overflow-hidden bg-cover mr-4'>
        <img src={image} alt="" className='w-full h-full rounded-md'/>
      </div>
      <div className='flex flex-col justify-center'>
      <h2 className='text-center md:text-lg font-semibold my-1 '>{name}</h2>
      <p className='text-start font-semibold text-slate-400'>Rs. {price}</p>
      </div>
    </div>
    </div>
  )
}

export default MenuDetail
