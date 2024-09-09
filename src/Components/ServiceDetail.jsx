import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ServiceDetail({title,description,image,loading}) {
  return (
    <div className='w-full h-full flex flex-col items-center px-0 md:px-4'>
      <div className='md:w-[50%] h-24 md:h-28 lg:h-[140px] overflow-hidden mb-4 bg-cover'>
      {
        loading?  <Skeleton className="rounded-xl w-full h-full" />: <img src={image} alt="" className='w-full h-full rounded-md'/>
      }  
      </div>
      <h2 className='text-center md:text-xl font-semibold mb-2'>
        { loading ? <Skeleton className="rounded-xl w-[150px] h-full" /> : title}</h2>
      <p className=' md:text-[16px] text-[10px] text-center text-gray-600 font-semibold'>
        {loading ?<Skeleton count={3} className="rounded-xl w-[250px] h-[full]" />: description}</p>
    </div>
  )
}

export default ServiceDetail
