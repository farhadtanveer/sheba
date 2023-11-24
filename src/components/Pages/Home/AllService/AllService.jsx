import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import EMI from "../../../../assets/emi-banner.webp";
import img1 from "../../../../assets/all services/service1.webp";
import img2 from "../../../../assets/all services/service2.webp";
import img3 from "../../../../assets/all services/service3.webp";
import img4 from "../../../../assets/all services/service4.webp";
import img5 from "../../../../assets/all services/service5.webp";
import img6 from "../../../../assets/all services/service6.webp";
import allservice from "../../../../assets/all services/all-services.svg";

const AllService = () => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const slidesPerView = 6;

  const handleSlideChange = (swiper) => {
    setShowLeftButton(swiper.activeIndex > 0);
    setShowRightButton(
      swiper.activeIndex < swiper.slides.length - slidesPerView
    );
  };

  return (
    <div>
      <div className="my-container -mt-[52px] px-6 bg-white font-poppins h-[120px] shadow-lg rounded-lg relative">
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
          <SwiperSlide>
            <div className="flex flex-col hover:bg-[#FAFBFC] items-center p-6">
              <img
                className="rounded-md w-10 h-10 mb-2"
                src={img1}
                alt="Best Deal"
              />
              <p className="text-center text-sm font-semibold">Best Deal</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col hover:bg-[#FAFBFC] items-center p-4">
              <img
                className="rounded-md w-10 h-10 mb-2"
                src={img2}
                alt="AC Repair Services"
              />
              <p className="text-center text-sm font-semibold">
                AC Repair Services
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col hover:bg-[#FAFBFC] items-center p-4">
              <img
                className="rounded-md w-10 h-10 mb-2"
                src={img3}
                alt="Appliance Repair"
              />
              <p className="text-center text-sm font-semibold">
                Appliance Repair
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col hover:bg-[#FAFBFC] items-center p-4">
              <img
                className="rounded-md w-10 h-10 mb-2"
                src={img4}
                alt="Beauty & Wellness"
              />
              <p className="text-center text-sm font-semibold">
                Beauty & Wellness
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col hover:bg-[#FAFBFC] items-center p-4">
              <img
                className="rounded-md w-10 h-10 mb-2"
                src={img5}
                alt="Men's Care & Salon"
              />
              <p className="text-center text-sm font-semibold">
                Men's Care & Salon
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col hover:bg-[#FAFBFC] items-center p-4">
              <img
                className="rounded-md w-10 h-10 mb-2"
                src={img6}
                alt="Cleaning & Pest Control"
              />
              <p className="text-center text-sm font-semibold">
                Cleaning & Pest Control
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col hover:bg-[#FAFBFC] items-center p-4">
              <img
                className="rounded-md w-10 h-10 mb-2"
                src={allservice}
                alt="allservice"
              />
              <p className="text-center text-sm font-semibold">All Services</p>
            </div>
          </SwiperSlide>
          <div
            className={` top-10 absolute left-0 z-10 button-prev-slide w-10 h-10 rounded-full bg-white shadow-md grid place-items-center${
              showLeftButton ? "visible" : "invisible"
            }`}
          >
            <IoIosArrowBack color="#C71E66" size={35} />
          </div>
          <div
            className={`top-10 absolute right-0 z-10 button-next-slide w-10 h-10 rounded-full bg-white shadow-md grid place-items-center${
              showRightButton ? "visible" : "invisible"
            }`}
          >
            <IoIosArrowForward color="#C71E66" size={35} />
          </div>
        </Swiper>
      </div>
      <div className=" max-w-[1100px] mx-auto md:flex items-center justify-between mt-8">
        <img src={EMI} alt="" />
      </div>
    </div>
  );
};

export default AllService;
