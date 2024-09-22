import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

function About() {
  return (
    <div className='h-[100vh]'>
      <div className='flex justify-center items-center h-20 bg-gray-500 px-10 gap-x-20'>
      <div className="h-16 w-16 flex items-center bg-cover">
           <Link to="/">
           <img src="../himalayanjava-logo.png" alt="" />
           </Link> 
          </div>
      </div>
      <div className='flex flex-col justify-center items-center my-5 px-10'>
        <h2 className='text-3xl font-bold border-b-[3px] border-gray-700 my-10 pb-3'>About Us</h2>
        <p className='md:px-20 my-5 text-center text-sm text-gray-700'>
        Our story began with a simple idea: to bring the authentic taste of Himalayan coffee to coffee lovers around the world. We source our beans directly from the lush hillsides of the Himalayas, where the cool climate and rich soil create the perfect conditions for growing some of the finest coffee in the world. Every cup we serve is a tribute to the hard work and dedication of our local farmers. 
        At Himalayan Java Coffee Cafe, we take pride in our coffee. Each batch of beans is carefully selected, roasted to perfection, and brewed to bring out its unique flavor profile. Whether you prefer a bold espresso, a creamy latte, or a rich pour-over, we have something to satisfy every palate. Our commitment to quality means you'll always enjoy a cup that's fresh, flavorful, and made with care. 
        We believe that coffee brings people together. That's why our cafe is designed to be a welcoming space for everyone—whether you're meeting friends, working remotely, or simply enjoying a moment of solitude. With cozy seating, free Wi-Fi, and a menu filled with delicious treats, our cafe is the perfect place to relax, recharge, and reconnect.
        </p>
        <div className='flex flex-col md:flex-row w-full justify-center gap-5 my-10'>
          <div className="h-[350px] w-full md:w-[45%] bg-[url('../location.jpg')] bg-cover rounded-sm flex justify-center items-center">
          </div>
          <div className="h-[350px] w-full md:w-[25%] bg-[url('../coffee.jpg')] bg-cover rounded-sm flex justify-center items-center">
         </div>
        </div>
        <hr className='w-full border-t-[1px] border-gray-400 mt-16' />
        <Footer/>
      </div>
    </div>
  )
}

export default About
