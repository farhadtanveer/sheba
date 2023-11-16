import React from "react";
import banner from "../../../../assets/home-banner.webp";
import location from "../../../../assets/location.svg";
import search from "../../../../assets/search-icon-white.svg";
import EMI from "../../../../assets/emi-banner.webp";

const Banner = () => {
  return (
    <div>
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          marginTop: "70px",
          height: "460px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 font-poppins"></div>
        <div className="absolute text-center text-white">
          <h1 className=" text-6xl font-bold pt-12 mb-5 tracking-wider">
            Your Personal Assistant
          </h1>
          <h1 className="text-2xl font-medium mb-4 tracking-wider">
            One-stop solution for your services. Order any service, anytime.
          </h1>
          <div className="mx-auto">
            <div className="flex gap-3 justify-center items-center mb-4">
              <div>
                <button className="bg-white text-black px-16 py-4 rounded-md">
                  <div className=" flex justify-center items-center gap-2">
                    <img className="" src={location} alt="" />
                    <span className=" text-md font-semibold">Uttara</span>
                  </div>
                </button>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Find your service here e.g. AC, Car, Facial..."
                    className="w-full pl-3 pr-80 py-4 border rounded-md"
                  />
                  <div className="absolute inset-y-0 right-0 flex justify-center items-center w-11 h-11 mt-2 mr-2 bg-[#C71E66] rounded-md">
                    <button type="submit">
                      <img src={search} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto md:flex items-center justify-between  py-3">
        <img src={EMI} alt="" />
      </div>
    </div>
  );
};

export default Banner;
