import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Rating = ({ rating, className }) => {
  let stars = '';

  if (rating === 1) {
    stars = '★';
  } else if (rating === 2) {
    stars = '★★';
  } else if (rating === 3) {
    stars = '★★★';
  } else if (rating === 4) {
    stars = '★★★★';
  } else if (rating === 5) {
    stars = '★★★★★';
  } else {
    stars = '☆☆☆☆☆'; 
  }

  return <div className={className}>{stars}</div>;
};

function Testimonial() {
  const [loading, setLoading] = useState(true)
  const [testimonial, setTestimonial] = useState([])
  useEffect(()=>{
    axios.get(`https://himalayanjava-server.onrender.com/customer`).then((res)=>{
     setTestimonial(res.data.customers[0])
     setLoading(false)
    })
  },[])

  return (
    <div className="relative h-[100vh] w-full flex items-center  px-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('../testimonial.avif')] bg-cover opacity-85"></div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <div className="relative w-full md:w-[50%] lg:w-[25%] h-full flex flex-col justify-center lg:ml-20 mb-10">
          <div className="relative w-full shadow-lg shadow-orange-200">
            {
              loading ? <Skeleton baseColor="#202020" className=" rounded-xl w-full h-[250px]" />:<img
              src={testimonial.image}
              alt=""
              className="rounded-xl"
            />
            }
            
          </div>
          <div className="relative">
            <h2 className="text-white text-xl font-semibold text-center mt-5 md:mt-14 mb-2">
            {
              loading ? <Skeleton baseColor="#202020" className="rounded-xl w-full h-[30px]" />: `${testimonial.name}, ${testimonial.profession}`
            }  
            </h2>
            <Rating rating={testimonial.rating} className="text-3xl text-amber-500 text-center" />
          </div>
        </div>

        <div className="relative w-full md:w-[60%] h-full text-white md:px-10">
          <div className="flex justify-start">
          {
            loading? "": <RiDoubleQuotesL className="text-xl md:text-5xl" />
          }  
          </div>

          <p className="px-5 text-sm lg:text-3xl md:text-xl font-bold">
         {
          loading? <Skeleton count={5} baseColor="#202020" className="rounded-xl w-[60%] h-[20px] ml-40" />: testimonial.comment
         }   
          </p>
          <div className="flex justify-end">
          {
            loading? "": <RiDoubleQuotesR className="text-xl md:text-5xl" />
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
