import React from 'react'

function ServiceDetail({title,description,image}) {
  return (
    <div className='w-full h-full flex flex-col items-center px-0 md:px-4'>
      <div className='md:w-[50%] h-24 md:h-28 lg:h-[140px] overflow-hidden mb-4 bg-cover'>
        <img src={image} alt="" className='w-full h-full rounded-md'/>
      </div>
      <h2 className='text-center md:text-xl font-semibold mb-2'>{title}</h2>
      <p className=' md:text-[16px] text-[10px] text-center text-gray-600 font-semibold'>{description}</p>
    </div>
  )
}

export default ServiceDetail
