import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ServiceDetail from '../Components/ServiceDetail'
import { Link } from 'react-router-dom';

const Services = React.forwardRef(function Services (props, ref) {

  return (
    <div ref={ref} className='w-full px-10 grid grid-cols-4 md:grid-cols-12 gap-4 my-16'>
      <div className='col-span-4 md:col-span-4 mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-black my-10'>Our Services</h2>
        <p className='text-lg text-gray-500 font-semibold mb-10'>
          Himalayan Java offers its customers the best-tasting coffee beverages in the country. We have achieved this by using high quality ingredients and strictly following preparation guidelines.
        </p>
        <button className='border-2 px-5 py-2 border-black text-xl'><Link to="/contact">Contact Us</Link></button>
      </div>
      <div className='flex flex-wrap col-span-4 md:col-span-8'>
      
      <Carousel showArrows={false} showStatus={false} swipeable={true}showThumbs={false}>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-3 p-4">
        <ServiceDetail title="Nepali Coffee Beans" description="Himalayan Java offers its customers with locally brewed taste." image="./nepali-coffee.png"/>
        <ServiceDetail title="Barista Training" description="Himalayan Java Barista Coffee School was introduced to promote the culture of vocational training in Nepal." image="./barista-training.webp"/>
        <ServiceDetail title="Bakery Equipments" description="Himalayan Java is the sole distributor of various coffee equipments and products in Nepal." image="./bakery-shop.webp"/>
        <ServiceDetail title="Fresh Bakery Items" description="We provide you a wide variety of fresh bakery items." image="./bakery.webp"/>
      </div>


      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
        <ServiceDetail title="Nepali Coffee Beans" description="Himalayan Java offers its customers with locally brewed taste." />
        <ServiceDetail title="Nepali Coffee Beans" description="Himalayan Java offers its customers with locally brewed taste." />
        <ServiceDetail title="Nepali Coffee Beans" description="Himalayan Java offers its customers with locally brewed taste." />
        <ServiceDetail title="Nepali Coffee Beans" description="Himalayan Java offers its customers with locally brewed taste." />
      </div>
    </Carousel>

      </div>
    </div>
  );
})

export default Services;

