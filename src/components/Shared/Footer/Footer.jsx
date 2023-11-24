import React from "react";
import appStore from "../../../assets/app-store.png";
import googleStore from "../../../assets/play-store.png";
import fb from "../../../assets/facebook.svg";
import linkedIn from "../../../assets/linkedin.svg";
import insta from "../../../assets/instagram.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EBECEF] font-poppins py-16">
        <div className=" my-container flex justify-center">
          <div className="flex space-x-20">
            <div className="w-1/4 text-sm">
              <p className="text-sm font-bold mb-4">CONTACT</p>
              <p>16516</p>
              <p>info@sheba.xyz</p>
              <p className=" mt-4 mb-2 font-semibold">Corporate Address</p>
              <p>
                House 454, Road No: 31,
                <br />
                Mohakhali DOHS, Dhaka
              </p>
            </div>
            <div className="w-1/4">
              <p className="text-sm font-bold mb-4">OTHER PAGES</p>
              <div className="flex flex-col space-y-4 text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Help
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of use
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Sitemap
                </a>
              </div>
            </div>
            <div className="w-1/4">
              <p className="text-sm font-bold mb-4">COMPANY</p>
              <div className="flex flex-col space-y-4 text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  sManager
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  sBusiness
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  sDelivery
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  sBondhu
                </a>
              </div>
            </div>
            <div className="w-2/4 text-right">
              <p className="text-sm font-bold mb-4">DOWNLOAD OUR APP</p>
              <p className="text-gray-600 text-sm tracking-wide mb-4">
                Tackle your to-do list wherever you are with our mobile app &
                make your life easy.
              </p>
              <div className="flex justify-between gap-2">
                <img className="w-44 h-12" src={appStore} alt="App Store" />
                <img
                  className=" w-44 h-12"
                  src={googleStore}
                  alt="Google Play Store"
                />
              </div>
              <div className=" flex mt-5 gap-4 justify-end">
                <img src={fb} alt="" />
                <img src={linkedIn} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" bg-[#DFE0E3] font-poppins h-[68px] text-sm flex justify-center items-center">
        <p>Copyright © 2023 Sheba Platform Limited | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
