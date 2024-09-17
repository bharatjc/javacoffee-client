import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeCartItem } from "../redux/Slices/cartSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [formErrors, setFormErrors] = useState([]);

  const [order, setOrder] = useState({
    customer: "",
    email: "",
    cardNo: "",
    email: "",
    products: [],
    province: "",
    city: "",
    total: null,
  });

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.value);
  useEffect(() => {
    if (cartItems) {
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);

      setOrder((prevOrder) => ({
        ...prevOrder,
        products: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          total: item.price * item.quantity,
        })),
        total: totalPrice,
      }));
    }
  }, [cartItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`https://himalayanjava-server.onrender.com/order`, order)
      .then((res) => {
        toast("Order placed successfully!", { autoClose: 2000 });
        setLoading(false);
        setOrder({
          customer: "",
          email: "",
          cardNo: "",
          email: "",
          products: [],
          province: "",
          city: "",
          total: null,
        });
        dispatch(removeCartItem());
      })
      .catch((err) => {
        if (err.response.status === 400 && err) {
          toast.error(err.response.data.msg, { autoClose: 2000 });
          setFormErrors(err.response.data.errors);
        } else {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
          });
          console.log("Error:", err);
        }
        setLoading(false);
      });
  };

  return (
    <div className="h-[100vh]">
      <div className="flex justify-center items-center h-20 bg-gray-500 px-10">
        <div className="h-16 w-16 flex items-center bg-cover">
          <Link to="/">
            <img src="../himalayanjava-logo.png" alt="" />
          </Link>
        </div>
      </div>

      <h2 className="text-center text-3xl font-bold mt-14">
        Products in the cart
      </h2>

      <div className="px-10 md:p-28 py-10 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[60%]">
            <div className="text-black mb-10">
              <p>Product details :</p>
              <p>
                You have {cartItems && cartItems.length} products in your cart
              </p>
            </div>

            <table>
              <thead>
                <tr className="grid grid-cols-7 gap-4 my-5 text-sm">
                  <th className="font-semibold">S.N.</th>
                  <th className="col-span-3 font-semibold">Product</th>
                  <th className="font-semibold">Price</th>
                  <th className="block md:hidden font-semibold">Qty</th>
                  <th className="hidden md:block font-semibold">Quantity</th>
                  <th className="font-semibold">Total</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {cartItems &&
                  cartItems.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="grid grid-cols-7 gap-4 my-2 text-[12px]"
                      >
                        <td className="text-center">{index + 1}.</td>
                        <td className="col-span-3 flex flex-col md:flex-row justify-around gap-2">
                          <h2 className="text-center text-[16px]">
                            {item.name}
                          </h2>
                          <img
                            src={item.image}
                            alt=""
                            className="w-[170px] h-[170px] bg-cover"
                          />
                        </td>
                        <td className="text-center">{item.price}</td>
                        <td className="flex justify-between">
                          <CiCircleMinus
                            className="text-lg cursor-pointer"
                            onClick={() =>
                              dispatch(
                                changeQuantity({
                                  _id: item._id,
                                  type: "decrement",
                                })
                              )
                            }
                          />
                          {item.quantity}
                          <CiCirclePlus
                            className="text-lg cursor-pointer"
                            onClick={() =>
                              dispatch(
                                changeQuantity({
                                  _id: item._id,
                                  type: "increment",
                                })
                              )
                            }
                          />
                        </td>
                        <td className="text-center">
                          ₹ {item.price * item.quantity}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-2 mt-10 h-[600px] bg-slate-200 w-full md:w-[35%] rounded-lg">
            <h2 className="text-amber-950 my-5 text-lg font-bold">
              Customer details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
              <input
                type="text"
                placeholder={`Customer's name`}
                value={order.customer}
                required
                onChange={(e) => {
                  setOrder((prevOrder) => ({
                    ...prevOrder,
                    customer: e.target.value,
                  }));
                }}
                className="bg-gray-500 w-full px-5 py-2 text-white outline-none"
              />
              <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "customer")?.message}
                </p>
              </div>
              
                <div className="mb-3">
                <input
                type="text"
                placeholder={`Card number`}
                value={order.cardNo}
                required
                onChange={(e) => {
                  setOrder((prevOrder) => ({
                    ...prevOrder,
                    cardNo: e.target.value,
                  }));
                }}
                className="bg-gray-500 w-full px-5 py-2 text-white outline-none"
              />
              <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "cardNo")?.message}
                </p>
                </div>
             
                <div className="mb-3">
                <input
                type="email"
                placeholder={`Email`}
                value={order.email}
                required
                onChange={(e) => {
                  setOrder((prevOrder) => ({
                    ...prevOrder,
                    email: e.target.value,
                  }));
                }}
                className="bg-gray-500 w-full px-5 py-2 text-white outline-none"
              />
              <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "email")?.message}
                </p>
                </div>
             
              <div className="flex gap-2 mb-5">
                <div className="flex flex-col mb-3">
                <input
                  type="text"
                  placeholder={`Province`}
                  value={order.province}
                  required
                  onChange={(e) => {
                    setOrder((prevOrder) => ({
                      ...prevOrder,
                      province: e.target.value,
                    }));
                  }}
                  className="bg-gray-500 w-full px-5 py-2 text-white outline-none"
                />
                <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "province")?.message}
                </p>
                </div>
               
                <div className="flex flex-col mb-3">
                <input
                  type="text"
                  placeholder={`City`}
                  value={order.city}
                  required
                  onChange={(e) => {
                    setOrder((prevOrder) => ({
                      ...prevOrder,
                      city: e.target.value,
                    }));
                  }}
                  className="bg-gray-500 w-full px-5 py-2 text-white outline-none"
                />
                <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "city")?.message}
                </p>
                </div>
                
              </div>
              <div className="flex justify-between mb-3 text-black">
                <h2>Subtotal</h2>
                <p>₹ {total}</p>
              </div>
              <div className="flex justify-between mb-3 text-black">
                <h2>Shipping</h2>
                <p>₹ {100}</p>
              </div>
              <div className="flex justify-between mb-3 text-black">
                <h2>Total(Inc.taxes)</h2>
                <p>₹ {(13 / 100) * total + total + 100}</p>
              </div>
              <div className="flex justify-center my-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="disabled:bg-gray-400 disabled:cursor-no-drop bg-gray-500 text-white py-2 rounded-lg px-5 flex items-center gap-2"
                >
                  Checkout <FaLongArrowAltRight className="mt-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr className="w-full border-t-[1px] border-gray-400 mt-16" />
      <Footer />
    </div>
  );
}

export default Cart;
