import React from "react";
import app from "../../../../assets/app-download.webp";
import appStore from "../../../../assets/app-store.png";
import googleStore from "../../../../assets/play-store.png";

const AppService = () => {
  return (
    <div className=" max-w-screen-lg mx-auto h-[580px] flex justify-center items-center gap-10  font-poppins">
      <div>
        {" "}
        <img src={app} alt="" />
      </div>
      <div className=" space-y-6">
        <p className=" text-sm flex justify-start items-center gap-3">
          <p className=" w-8 h-[1px] bg-gray-400"></p>
          <p>DOWNLOAD OUR APP</p>
        </p>
        <p className=" text-3xl font-semibold tracking-wide">
          Any Service, Any Time, Anywhere.
        </p>
        <p className=" text-md">
          Give us your mobile number. You’ll get an SMS with the app download
          link.
        </p>
        <div>
          <input
            className=" border border-gray rounded-l-lg w-2/3 h-14 pl-8"
            type="text"
            placeholder="Type your mobile number"
          />
          <a
            className=" bg-[#C71E66] hover:bg-[#c35b88] text-white px-6 py-4 rounded-r-lg text-mg tracking-wider"
            href="#"
          >
            Get the app
          </a>
        </div>
        <div className="flex gap-4">
          <img className="w-40 h-12" src={appStore} alt="App Store" />
          <img
            className="w-40 h-12"
            src={googleStore}
            alt="Google Play Store"
          />
        </div>
      </div>
    </div>
  );
};

export default AppService;
