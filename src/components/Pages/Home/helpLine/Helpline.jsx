import React from "react";
import call from "../../../../assets/service-request.png";
import { IoMdCall } from "react-icons/io";

const Helpline = () => {
  return (
    <div className=" bg-[#F4F5F8] lg:h-52 font-poppins relative pb-3">
      <div className=" my-container flex">
        <div className=" flex flex-col pt-14 px-8 lg:px-0">
          <div>
            <p className=" text-2xl font-semibold text-wider">
              Can’t find your desired service? Let us know 24/7 in 16516.
            </p>
          </div>
          <div className="flex gap-3 mt-5">
            <a
              className=" bg-[#C71E66] hover:bg-[#c35b88] text-white px-8 py-3 rounded-md text-md"
              href="#"
            >
              Request a service
            </a>
            <a
              className="flex justify-center items-center text-[#C71E66] hover:text-white gap-3 bg-white hover:bg-[#C71E66] px-16 py-3 rounded-md text-md font-bold border border-[#C71E66]"
              href="#"
            >
              <p>
                <IoMdCall></IoMdCall>
              </p>
              <p>16516</p>
            </a>
          </div>
          <div className="hidden sm:block absolute bottom-0 right-0 pr-36">
            <img src={call} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpline;
