import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../redux/Slices/cartSlice';

function Cart() {
   const [total, setTotal] = useState(0)

  const dispatch = useDispatch()
  const cartItems = useSelector(store=> store.cart.value)

  
  useEffect(()=>{
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  },[cartItems])
  return (
    <div className='h-[100vh]'>
    <div className='flex justify-center items-center h-20 bg-gray-500 px-10'>
    <div className="h-16 w-16 flex items-center bg-cover">
         <Link to="/">
         <img src="../himalayanjava-logo.png" alt="" />
         </Link> 
        </div>
    </div>

      <h2 className='text-center text-3xl font-bold mt-14'>Products in the cart</h2>
      
      <div className='px-10 md:p-28 py-10 rounded-xl'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-[60%]'>
          <div className='text-slate-400 mb-10'>
          <p>Product details :</p>
          <p>You have {cartItems.length} products in your cart</p>
          </div>
          
        <table>
          <thead>
            <tr className='grid grid-cols-7 gap-4 my-5 text-sm'>
              <th className='font-semibold'>S.N.</th>
              <th className='col-span-3 font-semibold'>Product</th>
              <th className='font-semibold'>Price</th>
              <th className="block md:hidden font-semibold">Qty</th> 
              <th className="hidden md:block font-semibold">Quantity</th> 
              <th className='font-semibold'>Total</th>
            </tr>
          </thead>
          <tbody className='text-gray-400'>
            
            {
              cartItems.map((item,index)=>{
                return <tr key={index} className='grid grid-cols-7 gap-4 my-2 text-[12px]'>
                   <td className='text-center'>{index+1}.</td>
              <td className='col-span-3 flex flex-col md:flex-row justify-around gap-2'>
              <h2 className='text-center text-[16px]'>{item.name}</h2>
                <img src={item.image} alt="" className='w-[170px] h-[170px] bg-cover'/>
              </td>
              <td className='text-center'>{item.price}</td>
              <td className='flex justify-between'>
              <CiCircleMinus
                        className="text-lg cursor-pointer"
                        onClick={()=> dispatch(
                          changeQuantity({
                            _id: item._id,
                            type: "decrement",
                          })
                        )}
                      />
                      {item.quantity}
                      <CiCirclePlus
                        className="text-lg cursor-pointer"
                        onClick={()=> dispatch(
                          changeQuantity({
                            _id: item._id,
                            type: "increment",
                          })
                        )}
                      />
              </td>
              <td className='text-center'>₹ {item.price*item.quantity}</td>
            </tr>
              })
            } 
          </tbody>
        </table>
        </div>

      <div className='px-5 py-2 mt-10 h-[450px] bg-slate-200 w-full md:w-[35%] rounded-lg'>
        <h2 className='text-amber-950 my-5 text-lg font-bold'>Customer details</h2>
        <form>
          <input type="text" placeholder={`Customer's name`} className='bg-gray-500 w-full px-5 py-2 text-white outline-none mb-3'/>
          <input type="text" placeholder={`Card number`} className='bg-gray-500 w-full px-5 py-2 text-white outline-none mb-3'/>
          <div className='flex gap-2'>
          <input type="text" placeholder={`Province`} className='bg-gray-500 w-full px-5 py-2 text-white outline-none mb-3'/>
          <input type="text" placeholder={`City`} className='bg-gray-500 w-full px-5 py-2 text-white outline-none mb-3'/>
          </div>
          <div className='flex justify-between mb-3 text-gray-500'>
            <h2>Subtotal</h2><p>₹ {total}</p>
          </div>
          <div className='flex justify-between mb-3 text-gray-500'>
            <h2>Shipping</h2><p>₹ {100}</p>
          </div>
          <div className='flex justify-between mb-3 text-gray-500'>
            <h2>Total(Inc.taxes)</h2><p>₹ {((13/100)*total) + total +100 }</p>
          </div>
         <div className='flex justify-center my-10'><button className='bg-gray-500 text-white py-2 rounded-lg px-5 flex items-center gap-2'>Checkout <FaLongArrowAltRight className='mt-1'/></button></div> 
        </form>
      </div>
      </div>
      </div>
      

     <hr className='w-full border-t-[1px] border-gray-400 mt-16' />
      <Footer/>
    
  </div>
  )
}

export default Cart
