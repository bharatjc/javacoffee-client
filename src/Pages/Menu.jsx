import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MenuDetail from '../Components/MenuDetail';
import axios from 'axios';
import { useSelector } from 'react-redux';

const items = 15; 

const Menu = React.forwardRef(function Menu(props, ref) {
  const searchedString = useSelector((store)=>{
    return store.visitor.value
   })
   
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

  const filteredMenus = searchedString
  ? menus.filter(
      (menu) =>
        menu.menuName && menu.menuPrice && searchedString &&
       ( menu.menuName.toLowerCase().includes(searchedString.toLowerCase())) || 
       (menu.menuPrice && menu.menuPrice.toString().includes(searchedString))
    )
  :menus;

  const finalMenus = filteredMenus.length > 0 ? filteredMenus : menus;

  const paginatedMenus = getDesiredMenus(finalMenus);
  return (
    <div ref={ref} className='px-10 w-full my-5 flex flex-col justify-center items-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-black my-10'>Menu</h2>
      <p className='text-center w-[90%] md:w-[55%] text-lg text-gray-500 font-semibold mb-10'>
      While most of the food in our menu changes from kitchen to kitchen and from cook to cook, what remains the same is our product from the bakery.</p>

      {loading ? (
          <div className="w-full bg-orange-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-5 gap-y-10 mb-20 p-10 rounded-xl">
           {Array(items).fill(0).map((_, i) => (
              <div key={i} className='w-full h-full flex items-center px-0 md:px-4 gap-3'>
                <Skeleton className="rounded-xl w-[150px] h-[150px]" />
                <div>
                <Skeleton className="w-[120px] h-[30px]" />
                <Skeleton className="w-[100px] h-[30px]" />
                <Skeleton className="w-[120px] h-[30px]" />
                </div>
                
              </div>
            ))}
          </div>
        ):

      <Carousel showArrows={false} showStatus={false} swipeable={true}showThumbs={false}>
      {paginatedMenus.map((page, index) => (
          <div key={index} className="bg-orange-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-5 gap-y-10 mb-20 p-10 rounded-xl">
            {page.map((menu, menuIndex) => (
              <MenuDetail key={menuIndex} name={menu.menuName} image={menu.image} price={menu.menuPrice} _id={menu._id}/>
            ))}
          </div>
        ))}
        </Carousel>
}
    </div>
  )
})

export default Menu
