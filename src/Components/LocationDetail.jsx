import React from 'react'

function LocationDetail({name,image}) {
  return (
    <div className='bg-white w-full h-full flex flex-col items-center px-0 md:px-4 shadow-md rounded-xl'>
      <div className='md:w-[70%] h-24 md:h-28 lg:h-[140px] overflow-hidden bg-cover'>
        <img src={image} alt="" className='w-full h-full rounded-md'/>
      </div>
      <h2 className='text-center md:text-xl font-semibold my-7 '>{name}</h2>
    </div>
  )
}

export default LocationDetail
