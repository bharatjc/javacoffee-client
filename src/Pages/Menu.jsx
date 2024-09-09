import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios';

const items = 15; 

const Menu = React.forwardRef(function Menu(props, ref) {
  const [loading, setLoading] = useState(true)
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get(`https://himalayanjava-server.onrender.com/menu`).then((res) => {
      setMenus(res.data.menus);
      setLoading(false)
    });
  }, []);

  function getDesiredMenus(menus){
    const paginated = [];
    for (let i = 0; i < menus.length; i += items) {
      paginated.push(menus.slice(i, i + items));
    }
    return paginated;
  };

  const paginatedMenus = getDesiredMenus(menus);
  return (
    <div ref={ref} className='px-10 w-full my-5 flex flex-col justify-center items-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-black my-10'>Menu</h2>
      <p className='text-center w-[90%] md:w-[55%] text-lg text-gray-500 font-semibold mb-10'>
      While most of the food in our menu changes from kitchen to kitchen and from cook to cook, what remains the same is our product from the bakery.</p>
      <Carousel showArrows={false} showStatus={false} swipeable={true}showThumbs={false}>
      {paginatedMenus.map((page, index) => (
          <div key={index} className="bg-orange-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-5 gap-y-10 mb-20 p-10 rounded-xl">
            {page.map((menu, menuIndex) => (
              <div key={menuIndex} className='w-full h-full flex items-center px-0 md:px-4 rounded-xl'>
              <div className='md:w-full lg:w-[45%] h-24 md:h-28 lg:h-[140px] overflow-hidden bg-cover mr-4'>
              {
                loading? <Skeleton className="rounded-xl w-full h-full" />:<img src={menu.image} alt="" className='w-[100px] h-full rounded-md'/>
              }  
              </div>
              <div className='flex flex-col justify-center'>
              <h2 className='text-center md:text-lg font-semibold my-1 '>{
                loading?<Skeleton className="rounded-xl w-[100px] h-full" />:menu.menuName}</h2>
              <p className='text-start font-semibold text-slate-400'> {
                loading?<Skeleton className="rounded-xl w-full h-full" />:    `Rs. ${menu.menuPrice}`}</p>
              </div>
            </div>
            ))}
          </div>
        ))}
        </Carousel>

    </div>
  )
})

export default Menu
