import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slidesData from "./trending.json"; // Adjust the path accordingly

const Trending = () => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const slidesPerView = 4;

  const handleSlideChange = (swiper) => {
    setShowLeftButton(swiper.activeIndex > 0);
    setShowRightButton(
      swiper.activeIndex < swiper.slides.length - slidesPerView
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-20 font-poppins">
      <div>
        <h1 className=" font-poppins text-2xl font-semibold tracking-wider mb-8">
          Trending
        </h1>
      </div>
      <Swiper
        className=" relative"
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <img className="rounded-md w-60 h-44" src={slide.img} alt="" />
              <p className=" font-poppins text-md font-bold tracking-wide mt-4 ">
                {slide.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div
          className={`top-[50%] absolute left-0 z-10 button-next-slide w-10 h-10 rounded-full bg-white shadow-md grid place-items-center ${
            showLeftButton ? "hidden" : ""
          }`}
        >
          <IoIosArrowBack color="#C71E66" size={35} />
        </div>
        <div
          className={`top-[50%] absolute right-0 z-10 button-prev-slide w-10 h-10 rounded-full bg-white shadow-md grid place-items-center ${
            showRightButton ? "hidden" : ""
          }`}
        >
          <IoIosArrowForward color="#C71E66" size={35} />
        </div>
      </Swiper>
    </div>
  );
};

export default Trending;
