import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CharDhamYatra = () => {
  const data = [
    {
      title: "Jagannath Puri",
      img: "https://www.mypuritour.com/wp-content/uploads/2022/08/puri-tour-2022.jpeg",
      description:
        "The Jagannath Temple is a Hindu temple dedicated to the god Jagannath, a form of Vishnu in Hinduism.",
    },
    {
      title: "Rameswaram",
      img: "https://www.justahotels.com/wp-content/uploads/2024/02/Ramanathaswamy-Temple.jpg",
      description:
        "The shrine is dedicated to Lord Shiva and is one of the twelve jyotirlinga temples in India.",
    },
    {
      title: "Dwarka",
      img: "https://khojoindia.org/uploads/images/202304/image_870x_642bf75ac4867.jpg",
      description:
        "Dwarakadheesh is the 98th Divya Desam of Vishnu on the subcontinent, glorified in the Divya Prabandha sacred texts.",
    },
    {
      title: "Badrinath",
      img: "badrinath.jpg",
      description:
        "Badrinath, a major pilgrimage center dedicated to Lord Vishnu, is located in the Garhwal hills.",
    },
    {
      title: "Yamunotri",
      img: "yamunotri.jpg",
      description:
        "Yamunotri, the source of river Yamuna, is revered by Hindu pilgrims seeking purification.",
    },
    {
      title: "Gangotri",
      img: "gangotri.jpg",
      description:
        "Gangotri, the origin of the river Ganges, is a significant pilgrimage site for Hindus.",
    },
    {
      title: "Kedarnath",
      img: "kedarnath.jpg",
      description:
        "Kedarnath, dedicated to Lord Shiva, is one of the twelve Jyotirlingas and a key pilgrimage site.",
    },
  ];

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
          {data.map((el, id) => (
            <SwiperSlide key={id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                <img
                  src={el.img}
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

                <button type="button" class="text-white bg-[#4ADE80] p-5 ">
                  View Details
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CharDhamYatra;
