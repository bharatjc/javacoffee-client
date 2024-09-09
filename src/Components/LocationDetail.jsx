import React from 'react'

function LocationDetail({name,image}) {
  return (
    <div className='bg-white w-full h-full flex flex-col items-center px-0 shadow-md rounded-xl'>
      <div className='md:w-full h-[90%] overflow-hidden bg-cover'>
        <img src={image} alt="" className='w-full h-full rounded-xl'/>
      </div>
      <h2 className='text-center md:text-xl font-semibold my-5'>{name}</h2>
    </div>
  )
}

export default LocationDetail
