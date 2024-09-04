import React from 'react'
import LocationDetail from '../Components/LocationDetail'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Location = React.forwardRef(function Location(props, ref) {
  return (
    <div ref={ref} className='px-10 w-full my-5 flex flex-col justify-center items-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-black my-10'>Find Us</h2>
      <p className='text-center w-[85%] md:w-[40%] text-lg text-gray-500 font-semibold mb-10'>Himalayan Java outlets are available with the best coffee throughout the major cities of Nepal.</p>

      <Carousel showArrows={false} showStatus={false} swipeable={true}showThumbs={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 grid-rows-2 gap-10 p-4">
        <LocationDetail name="Patan Durbar Square" image="./nepali-coffee.png"/>
        <LocationDetail name="Patan Durbar Square" image="./barista-training.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery-shop.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-10 p-4 mb-20">
        <LocationDetail name="Patan Durbar Square" image="./nepali-coffee.png"/>
        <LocationDetail name="Patan Durbar Square" image="./barista-training.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery-shop.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
        <LocationDetail name="Patan Durbar Square" image="./bakery.webp"/>
      </div>
      </Carousel>
    </div>
  )
})

export default Location
