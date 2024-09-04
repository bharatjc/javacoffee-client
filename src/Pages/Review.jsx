import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Review() {

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
      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={`w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={`w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
          <div className="flex space-x-2 text-2xl text-gray-300">
           <span className='cursor-pointer'>★</span>  
           <span className='cursor-pointer'>★</span> 
           <span className='cursor-pointer'>★</span>
           <span className='cursor-pointer'>★</span>
           <span className='cursor-pointer'>★</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Comment
          </label>
          <textarea
            name="comment"
            rows="4"
            className={`w-full p-2 border rounded`}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default Review
