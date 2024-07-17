import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Element } from "react-scroll";

const PopularTrek = () => {
  const data = [
    {
      title: "Ranthan Top",
      img: "https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/9cad38b5-8e7a-4d31-b6ed-348e56622d7b_Ranthan+Kharak_Indiahikes_Nitesh+Kumar_2021_+%288%29.jpg?auto=compress,format&rect=0,0,1600,1067&w=1200&h=800&h=800&w=1200",
      description:
        "Summer is one of the best times for trekking in the Kumaon region. In this season you can observe different shades of green right throughout the trek.",
    },
    {
      title: "Surya Top",
      img: "https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/128f02d0-248b-4afa-b0bd-1d76fe8abbfb_Surya+Top_Banner+Images_Mayank+Khare-4.jpg?auto=compress,format&rect=0,0,2400,1600&w=1200&h=800&h=800&w=1200",
      description:
        "Summers are warm on Surya Top trek. Picture bright green meadows getting toasted under hot sunlight.",
    },
    {
      title: "Dwarka",
      img: "https://khojoindia.org/uploads/images/202304/image_870x_642bf75ac4867.jpg",
      description:
        "Dwarakadheesh is the 98th Divya Desam of Vishnu on the subcontinent, glorified in the Divya Prabandha sacred texts.",
    },
    {
      title: "Phulara Ridge",
      img: "https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/80b21c1b-df55-4a8a-9027-84dea02bf689_Phulara-Ridge-Trek-Indiahikes-Dhaval+Jajal-2.jpg?auto=compress,format&rect=0,0,1599,901&w=1200&h=676&h=676&w=1200",
      description:
        "Badrinath, a major pilgrimage center dedicated to Lord Vishnu, is located in the Garhwal hills.",
    },
    {
      title: "Yamunotri",
      img: "yamunotri.jpg",
      description:
        "This is a trek hidden in plain sight. It starts from Kotgoan, the same base camp as the popular Kedarkantha. While Kedarkantha sees massive crowds, this trek silently watches on.",
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
      <div className="border-b-2 border-[#4ADE80] max-w-2xl mx-auto px-5">
        <h1 className="text-center text-2xl md:text-3xl font-medium p-5 md:p-10">
          Popular Trek's
        </h1>
      </div>
      <Element name="trek1" className="element">
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
                  <button type="button" className="text-white bg-[#4ADE80] p-5">
                    View Details
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Element>
    </div>
  );
};

export default PopularTrek;
