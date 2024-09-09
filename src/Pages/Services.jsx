import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import axios from "axios";

const items = 4;
const Services = React.forwardRef(function Services(props, ref) {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`https://himalayanjava-server.onrender.com/service`)
      .then((res) => {
        setServices(res.data.services);
        setLoading(false)
      });
  }, []);

  function getDesiredServices(services) {
    const paginated = [];
    for (let i = 0; i < services.length; i += items) {
      paginated.push(services.slice(i, i + items));
    }
    return paginated;
  }

  const paginatedServices = getDesiredServices(services);
  return (
    <div
      ref={ref}
      className="w-full px-10 grid grid-cols-4 md:grid-cols-12 gap-4 my-16"
    >
      <div className="col-span-4 md:col-span-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black my-10">
          Our Services
        </h2>
        <p className="text-lg text-gray-500 font-semibold mb-10">
          Himalayan Java offers its customers the best-tasting coffee beverages
          in the country. We have achieved this by using high quality
          ingredients and strictly following preparation guidelines.
        </p>
        <button className="border-2 px-5 py-2 border-black text-xl">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="flex flex-wrap col-span-4 md:col-span-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-10 gap-y-3 p-4 mb-20">
           {Array(items).fill(0).map((_, i) => (
              <div key={i} className='w-full h-full flex flex-col items-center px-0 md:px-4'>
                <Skeleton className="rounded-xl w-[250px] h-36 mb-4" />
                <Skeleton className="rounded-xl w-[150px] h-5 mb-2" />
                <Skeleton count={3} className="rounded-xl w-[250px] h-4" />
              </div>
            ))}
          </div>
        ): (
          <Carousel
            showArrows={false}
            showStatus={false}
            swipeable={true}
            showThumbs={false}
          >
            {paginatedServices.map((page, index) => (
              <div
                key={index}
                className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-3 p-4 mb-20"
              >
                {page.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="w-full h-full flex flex-col items-center px-0 md:px-4"
                  >
                    <div className="md:w-[50%] h-24 md:h-28 lg:h-[140px] overflow-hidden mb-4 bg-cover">
                      <img
                        src={service.image}
                        alt=""
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <h2 className="text-center md:text-xl font-semibold mb-2">
                      {service.title}
                    </h2>
                    <p className=" md:text-[16px] text-[10px] text-center text-gray-600 font-semibold">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
});

export default Services;
