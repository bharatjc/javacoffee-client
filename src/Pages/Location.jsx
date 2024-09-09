import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import LocationDetail from "../Components/LocationDetail";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const items = 8;

const Location = React.forwardRef(function Location(props, ref) {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(`https://himalayanjava-server.onrender.com/outlet`)
      .then((res) => {
        setLocations(res.data.outlets);
        setLoading(false);
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
      {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-10 p-4 mb-20">
           {Array(items).fill(0).map((_, i) => (
              <div key={i} className='w-full h-full flex flex-col items-center px-0 md:px-4 gap-3'>
                <Skeleton className="rounded-xl w-[220px] h-[180px]" />
                <Skeleton className="w-[220px] h-[30px]" />
              </div>
            ))}
          </div>
        ):
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
             <LocationDetail key={locIndex} location={location.location} image={location.image} date={location.createdAt} special={location.special}/>
            ))}
          </div>
        ))}
      </Carousel>
}
    </div>
  );
});

export default Location;
