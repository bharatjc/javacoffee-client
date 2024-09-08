import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Review() {
  const [loading, setLoading] = useState(false)
  const [formErrors, setFormErrors] = useState([]);
  const [review, setReview] = useState({
    name : "",
    email : "",
    profession: "",
    rating: 0,
    comment :"",
    image: null,
  });

function handleClick(index){
    setReview((prevReview) => ({
      ...prevReview,
      rating: index,
    }));
  };

  function handleChange(e){
    const {name, value, files} = e.target;
    if (name === "image") {
      setReview({ ...review, image: files[0] });
    } else {
      setReview({ ...review, [name]: value });
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true);
    const formData = new FormData();
    formData.append('name', review.name);
    formData.append('email', review.email);
    formData.append('profession', review.profession);
    formData.append('rating', review.rating);
    formData.append('comment', review.comment);
    if (review.image) {
      formData.append('image', review.image);
    }
    axios
      .post(`https://himalayanjava-server.onrender.com/customer`, formData)
      .then((res) => {
        toast("Review sent successfully!", { autoClose: 2000 });
        setReview({
          name: "",
          email: "",
          profession: "",
          rating: 0,
          image: null,
          comment:""
        })
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let errors = err.response?.data?.errors;
        if (err?.response?.status === 400 && errors) {
          setFormErrors(errors);
        } else {
          toast.error("Something went wrong", { autoClose: 2000 });
        }
      });
  }


  return (
    <div className="max-w-lg mx-auto my-5 p-6 bg-white rounded-lg shadow-md">
      <div className='flex items-center mb-10 gap-x-5'>
      <div className="h-16 w-16 flex items-center bg-cover">
           <Link to="/">
           <img src="../himalayanjava-logo.png" alt="" />
           </Link> 
          </div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
          id='name'
            type="text"
            name="name"
            required
            value={review.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
          id='email'
            type="email"
            name="email"
            required
            value={review.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
            Profession
          </label>
          <input
          id='profession'
            type="text"
            name="profession"
            required
            value={review.profession}
            onChange={handleChange}
            className={`w-full p-2 border rounded`}
          />
        </div>
        <div>
        <label htmlFor="image" className="font-semibold">
      Image
    </label>
    <input
      className="mb-5 p-2 w-full border-[1px] border-[#C2C5E1] text-sm"
      name="image"
      type="file"
      id="image"
      onChange={handleChange}
    />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
          <div className="flex space-x-2 text-2xl text-gray-300">
          {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`cursor-pointer ${value <= review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
          onClick={() => handleClick(value)}
        >
          ★
        </span>
        ))}
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comment
          </label>
          <textarea
          id='comment'
            name="comment"
            rows="4"
            value={review.comment}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="disabled:bg-[#dad7d3] disabled:cursor-no-drop w-full bg-[#D8C3A5] text-amber-900 py-2 rounded-lg"
        >
          Submit Review
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default Review
