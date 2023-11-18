import React from "react";
import cover from "../../../../assets/why-choose-us.webp";
import img1 from "../../../../assets/usp_mask.png";
import img2 from "../../../../assets/usp_24_7.png";
import img3 from "../../../../assets/usp_sanitized.png";
import img4 from "../../../../assets/usp_gloves.png";

const Benefits = () => {
  return (
    <div>
      <div className="h-[450px] bg-[#FAFBFC] mt-28 font-poppins">
        <div className="max-w-screen-lg mx-auto">
          <div className=" pt-12">
            <p className="text-sm flex justify-start items-center gap-3">
              <p className=" w-8 h-[1px] bg-gray-400"></p>
              <p>WHY CHOOSE US</p>
            </p>
            <p className=" text-3xl mt-3 font-semibold tracking-wide">
              Because we care about your safety..
            </p>
          </div>
          <div className=" flex justify-between gap-6 mt-8">
            <div className=" grid grid-cols-2 gap-5">
              <div className=" bg-white rounded-lg flex justify-center items-center gap-2 px-10">
                <img className=" w-14 h-14" src={img1} alt="" />
                <p className=" font-semibold">
                  Ensuring <br /> Masks
                </p>
              </div>
              <div className=" bg-white rounded-lg flex justify-center items-center gap-2 px-10">
                <img className=" w-14 h-14" src={img2} alt="" />
                <p className=" font-semibold">
                  24/7 <br /> Support
                </p>
              </div>
              <div className=" bg-white rounded-lg flex justify-center items-center gap-2 px-10">
                <img className=" w-14 h-14" src={img3} alt="" />
                <p className=" font-semibold">
                  Sanitising <br /> Hands & <br /> Equipment
                </p>
              </div>
              <div className=" bg-white rounded-lg flex justify-center items-center gap-2 px-10">
                <img className=" w-14 h-14" src={img4} alt="" />
                <p className=" font-semibold">
                  Ensuring <br /> Gloves
                </p>
              </div>
            </div>
            <div>
              <img className=" rounded-lg h-[260px]" src={cover} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[145px] bg-[#F4F5F8] mt-1 font-poppins">
        <div className=" max-w-screen-lg mx-auto flex justify-around py-7">
          <div>
            <p className=" text-5xl">15,000 +</p>
            <p className=" text-lg tracking-wide text-center mt-3">
              Service Providers
            </p>
          </div>
          <p className=" w-[4px] h-20 bg-white"></p>
          <div>
            <p className=" text-5xl">2,00,000 +</p>
            <p className=" text-lg tracking-wide text-center mt-3">
              Order Served
            </p>
          </div>
          <p className=" w-[4px] h-20 bg-white"></p>
          <div>
            <p className=" text-5xl">1,00,000 +</p>
            <p className=" text-lg tracking-wide text-center mt-3">
              5 Star Received
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
