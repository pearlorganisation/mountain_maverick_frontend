import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

async function getData() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION}/tours`
    );
    return await res.json();
  } catch (err) {
    console.log("Something wrong occurred: " + err);
    return [];
  }
}

const Tour = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data, "here toue");
  }, [data]);

  return (
    <div>
      <div className="bg-gray-100">
        <div className="border-b-2 border-[#4ADE80] max-w-2xl mx-auto px-5">
          <h1 className="text-center text-2xl md:text-3xl font-medium p-5 md:p-10">
            Popular Tours
          </h1>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            // modules={[Pagination]}
            className="p-10"
          >
            {Array.isArray(data) &&
              data?.map((el) => (
                <SwiperSlide key={el._id}>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                    <img
                      src={el.banner}
                      alt={el.title}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1 lg:line-clamp-2">
                        {el.title}
                      </h3>
                      <p className="text-gray-600 flex-grow overflow-hidden text-ellipsis line-clamp-3">
                        {el.description}
                      </p>
                    </div>
                    <Link
                      to={`tourDetail/${el._id}`}
                      className="text-white bg-[#4ADE80] p-5"
                    >
                      View Details
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tour;
