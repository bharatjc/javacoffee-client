import React, { useState } from "react";

function LocationDetail({location, image, date, special}) {
  const [isOpen, setIsOpen] = useState(false);
  function openLocation() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`bg-white w-full h-full flex flex-col items-center px-0 shadow-md rounded-xl transition-transform duration-300 ${
        isOpen ? "scale-125" : "scale-100"
      }`}
      onClick={openLocation}
    >
      <div className="md:w-full h-[90%] overflow-hidden bg-cover">
        <img src={image} alt="" className="w-full h-full rounded-xl" />
      </div>
      {isOpen ? (
        <h2 className="relative text-sm text-amber-900">
          Opened on: {date.slice(0, 10)}
        </h2>
      ) : (
        ""
      )}
      <h2 className="text-center text-gray-900 md:text-xl font-semibold my-2">
        {location}
      </h2>
      {isOpen ? (
        <div className="flex justify-between my-3 gap-5 text-xs">
          <p className="text-orange-500">Special: {special}</p>
          <p className="text-yellow-600">Rating: 5 stars</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LocationDetail;
