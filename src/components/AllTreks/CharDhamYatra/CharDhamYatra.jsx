import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharDham } from "../../../Feature/actions/charDham";
import { Link } from "react-router-dom";

const CharDhamYatra = () => {
  const dispatch = useDispatch();
  const { charDhamData, isSuccess } = useSelector((state) => state?.charDham);

  useEffect(() => {
    dispatch(getCharDham());
  }, []);

  console.log(isSuccess, "gfdgfsgfdgsafdg");
  return (
    <div className="bg-gray-100">
      <div className=" border-b-2 border-[#4ADE80] max-w-2xl mx-auto px-5">
        <h1 className="text-center  text-2xl md:text-3xl font-medium p-5 md:p-10">
          Char Dham Yatra
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
          modules={[Pagination]}
          className="p-10"
        >
          {charDhamData.map((el) => (
            <SwiperSlide key={el._id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col hover:scale-105 transform transition duration-300">
                <img
                  src={el.banner}
                  alt={el.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {el.title}
                  </h3>
                  <p className="text-gray-600 flex-grow overflow-hidden text-ellipsis line-clamp-3">
                    {el.description}
                  </p>
                </div>

                <Link
                  to={`/product/${el._id}`}
                  className="text-white bg-[#4ADE80] p-5 "
                >
                  View Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CharDhamYatra;
