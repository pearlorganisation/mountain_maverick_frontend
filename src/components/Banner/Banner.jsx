import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            src="banner2.jpg"
            alt="Mountain Climbing"
            className="w-full h-[450px] lg:h-[650px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h3 className="text-4xl lg:text-6xl font-semibold  lg:my-0">
              Mountain Maverick
            </h3>
            <p className="tracking-wide lg:tracking-wider leading-5 lg:leading-7 mb-5">
              20,000+ Trust Our Transformative Trek Experience and <br />
              Pioneering Safety Standards Each Year
            </p>
            <button className="bg-green-400 text-black font-semibold uppercase w-[250px] px-8 py-4 mt-10">
              Explore Treks
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="banner2.jpg"
            alt="Mountain Climbing"
            className="w-full h-[450px] lg:h-[650px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h3 className="text-4xl lg:text-6xl font-semibold  lg:my-0">
              Mountain Maverick
            </h3>
            <p className="tracking-wide lg:tracking-wider leading-5 lg:leading-7 mb-5">
              20,000+ Trust Our Transformative Trek Experience and <br />
              Pioneering Safety Standards Each Year
            </p>
            <button className="bg-green-400 text-black font-semibold uppercase w-[250px] px-8 py-4 mt-10">
              Explore Treks
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
