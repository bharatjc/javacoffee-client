import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const items = 8;

const Location = React.forwardRef(function Location(props, ref) {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  function openLocation() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios
      .get(`https://himalayanjava-server.onrender.com/outlet`)
      .then((res) => {
        setLocations(res.data.outlets);
        setLoading(false);
        console.log(res.data.outlets);
      });
  }, []);

  const getDesiredLocations = (locations) => {
    const paginated = [];
    for (let i = 0; i < locations.length; i += items) {
      paginated.push(locations.slice(i, i + items));
    }
    return paginated;
  };

  const paginatedLocations = getDesiredLocations(locations);

  return (
    <div
      ref={ref}
      className="px-10 w-full my-5 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black my-10">
        Find Us
      </h2>
      <p className="text-center w-[85%] md:w-[40%] text-lg text-gray-500 font-semibold mb-10">
        Himalayan Java outlets are available with the best coffee throughout the
        major cities of Nepal.
      </p>

      <Carousel
        showArrows={false}
        showStatus={false}
        swipeable={true}
        showThumbs={false}
      >
        {paginatedLocations.map((page, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-10 p-4 mb-20"
          >
            {page.map((location, locIndex) => (
              <div
                key={locIndex}
                className={`bg-white w-full h-full flex flex-col items-center px-0 shadow-md rounded-xl transition-transform duration-300 ${
                  isOpen ? "scale-125" : "scale-100"
                }`}
                onClick={openLocation}
              >
                <div className="md:w-full h-[90%] overflow-hidden bg-cover">
                  {loading ? (
                    <Skeleton className="rounded-xl w-full h-[180px]" />
                  ) : (
                    <img
                      src={location.image}
                      alt=""
                      className="w-full h-full rounded-xl"
                    />
                  )}
                </div>
                {isOpen ? (
                  <h2 className="relative text-sm text-amber-900">
                    Opened on: {date.slice(0, 10)}
                  </h2>
                ) : (
                  ""
                )}
                <h2 className="text-center text-gray-900 md:text-xl font-semibold my-2">
                  {loading ? (
                    <Skeleton className="w-[220px] h-[30px]" />
                  ) : (
                    location.location
                  )}
                </h2>
                {isOpen ? (
                  <div className="flex justify-between my-3 gap-5 text-xs">
                    <p className="text-orange-500">
                      Special: {location.special}
                    </p>
                    <p className="text-yellow-600">Rating: 5 stars</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
});

export default Location;
