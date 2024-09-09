import React, { useEffect, useState } from 'react';
import LocationDetail from '../Components/LocationDetail';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

const items = 8; 

const Location = React.forwardRef(function Location(props, ref) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(`https://himalayanjava-server.onrender.com/outlet`).then((res) => {
      setLocations(res.data.outlets);
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
    <div ref={ref} className='px-10 w-full my-5 flex flex-col justify-center items-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-black my-10'>Find Us</h2>
      <p className='text-center w-[85%] md:w-[40%] text-lg text-gray-500 font-semibold mb-10'>
        Himalayan Java outlets are available with the best coffee throughout the major cities of Nepal.
      </p>

      <Carousel showArrows={false} showStatus={false} swipeable={true} showThumbs={false}>
        {paginatedLocations.map((page, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-10 p-4 mb-20">
            {page.map((location, locIndex) => (
              <LocationDetail key={locIndex} name={location.location} image={location.image} />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
});

export default Location;
