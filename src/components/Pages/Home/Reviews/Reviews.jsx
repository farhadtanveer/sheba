import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slidesData from "./Reviews.json"; // Adjust the path accordingly

const Reviews = () => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const slidesPerView = 1;

  const handleSlideChange = (swiper) => {
    setShowLeftButton(swiper.activeIndex > 0);
    setShowRightButton(
      swiper.activeIndex < swiper.slides.length - slidesPerView
    );
  };

  return (
    <div>
      <div className="h-[620px] font-poppins mt-36 mb-10 bg-[#F4F5F8]">
        <div className="my-container pt-14">
          <div className=" pt-12">
            <p className="text-sm flex justify-start items-center gap-3">
              <p className=" w-8 h-[1px] bg-gray-400"></p>
              <p>SOME HAPPY FACES</p>
            </p>
            <p className=" text-3xl mt-3 font-semibold tracking-wide">
              Real Happy Customers, Real Stories
            </p>
          </div>
          <Swiper
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
                <div className="flex justify-between gap-3 mt-10">
                  <p className=" w-2 h-[300px] bg-[#00A1BA] mr-5"></p>
                  <div className=" w-1/2">
                    <p className="text-xl font-light text-[#49494A] italic pt-6 tracking-wide">
                      <span className="text-3xl font-bold">&quot; </span>
                      {slide.review}
                    </p>
                    <p className="text-sm flex items-center gap-2 my-4">
                      <p className=" w-2 h-[1px] bg-black"></p>
                      <p className=" text-sm font-medium tracking-wide">
                        {slide.name}
                      </p>
                    </p>
                    <p className=" text-sm tracking-wide">
                      {slide.designation}
                    </p>
                  </div>
                  <div className=" w-1/2">
                    <iframe
                      className="rounded-lg h-[330px] w-full"
                      src={slide.link}
                      title="YouTube Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Arrow Buttons */}
            <div
              className={`bottom-0 absolute left-12 z-10 button-prev-slide w-10 h-10 rounded-full bg-white shadow-md grid place-items-center ${
                showLeftButton ? "" : "opacity-70 pointer-events-none"
              }`}
            >
              <IoIosArrowBack
                color={showLeftButton ? "#C71E66" : "#ccc"}
                size={30}
              />
            </div>

            <div
              className={`bottom-0 absolute left-24 z-10 button-next-slide w-10 h-10 rounded-full bg-white shadow-md grid place-items-center ${
                showRightButton ? "" : "opacity-70 pointer-events-none"
              }`}
            >
              <IoIosArrowForward
                color={showRightButton ? "#C71E66" : "#ccc"}
                size={30}
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
