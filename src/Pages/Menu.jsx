import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import MenuDetail from '../Components/MenuDetail';

const Menu = React.forwardRef(function Menu(props, ref) {
  return (
    <div ref={ref} className='px-10 w-full my-5 flex flex-col justify-center items-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-black my-10'>Menu</h2>
      <p className='text-center w-[90%] md:w-[55%] text-lg text-gray-500 font-semibold mb-10'>
      While most of the food in our menu changes from kitchen to kitchen and from cook to cook, what remains the same is our product from the bakery.</p>
      <Carousel showArrows={false} showStatus={false} swipeable={true}showThumbs={false}>

      <div className="bg-orange-50 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 grid-rows-2 md:gap-x-3 lg:gap-x-6 gap-y-10 mb-20 p-10 rounded-lg">
        <MenuDetail name="Patan Durbar Square" image="./nepali-coffee.png" price="170"/>
        <MenuDetail name="Patan Durbar Square" image="./barista-training.webp" price="170"/>
        <MenuDetail name="Patan Durbar Square" image="./bakery-shop.webp" price="170"/>
        <MenuDetail name="Patan Durbar Square" image="./bakery.webp" price="170"/>
        <MenuDetail name="Patan Durbar Square" image="./bakery.webp" price="170"/>
        <MenuDetail name="Patan Durbar Square" image="./bakery.webp" price="170"/>
        <MenuDetail name="Patan Durbar Square" image="./bakery.webp" price="170"/>
        <MenuDetail name="Patan Durbar Square" image="./bakery.webp" price="170"/>
      </div>
        </Carousel>

    </div>
  )
})

export default Menu
