import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formErrors, setFormErrors] = useState([]);
const [contactData, setContactData] = useState({
  name:"",
  email: "",
  phone: "",
  subject: "",
  message: ""
})
 
function handleChange(e){
  const {name,value} = e.target
  setContactData({...contactData, [name]:value})
}

function handleSubmit(e) {
  e.preventDefault();
  setLoading(true)
  axios
    .post(`https://himalayanjava-server.onrender.com/viewer`, contactData)
    .then((res) => {
      toast("Form submitted successfully!", { autoClose: 2000 });
      navigate("/");
    })
    .catch((err) => {
      if (err.response.status === 400 && err) {
        toast.error(err.response.data.msg, { autoClose: 2000 });
        setFormErrors(err.response.data.errors)
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
        });
        console.log("Error:", err);
      }
      setLoading(false)
    });
}

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className='flex justify-center items-center mb-10 gap-x-5'>
      <div className="h-16 w-16 flex justify-center items-center bg-cover">
           <Link to="/">
           <img src="../himalayanjava-logo.png" alt="" />
           </Link> 
          </div>
      </div>
      <h2 className="text-2xl font-bold text-center my-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label htmlFor='name' className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id='name'
            value={contactData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded text-sm"
          />
           <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "name")?.message}
                </p>
        </div>
        <div>
          <label htmlFor='email' className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id='email'
            value={contactData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded text-sm"
          />
          <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "email")?.message}
                </p>
        </div>
        <div>
          <label htmlFor='phone' className="block text-sm font-medium text-gray-700 mb-1">
            Phone (Optional)
          </label>
          <input
            type="text"
            name="phone"
            id='phone'
            value={contactData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded border-gray-300 text-sm"
          />
          <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "phone")?.message}
                </p>
        </div>
        <div>
          <label htmlFor='subject' className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id='subject'
            value={contactData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded text-sm"
          />
          <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "subject")?.message}
                </p>
        </div>
        <div>
          <label htmlFor='message' className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            id='message'
            value={contactData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded text-sm"
          ></textarea>
          <p className="text-[12px] text-red-500">
                  {formErrors.find(error => error.field === "message")?.message}
                </p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="disabled:bg-[#dad7d3] disabled:cursor-no-drop w-full bg-[#D8C3A5] text-amber-900 py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact
