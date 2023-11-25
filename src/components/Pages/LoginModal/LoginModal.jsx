import React from "react";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../assets/login_logo.png";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";

const LoginModal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-[540px] h-[480px] rounded-sm relative">
        <div className="absolute top-0 right-0 -mt-3 -mr-3">
          <div className="w-10 h-10 rounded-full bg-white shadow-md grid place-items-center">
            <RxCross2 onClick={onClose} color="#C71E66" size={25} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center font-poppins h-full">
          <div className="mb-6">
            <img className="w-[125px] h-[70px]" src={logo} alt="Company Logo" />
          </div>

          <div className="mb-4">
            <p>Login with</p>
          </div>

          <div className="w-[300px] my-6">
            <a
              className="bg-[#C71E66] hover:bg-[#c35b88] text-white rounded-md text-md px-[89px] py-3"
              href="#"
            >
              Mobile Number
            </a>
          </div>

          <div className="flex justify-between w-[300px] mb-6">
            <div>
              <a
                className="flex justify-center items-center gap-3 bg-white hover:bg-[#FAFBFC] text-gray-400 px-8 py-2 rounded-md border border-[#bfc8d1]"
                href="#"
              >
                <img className="w-4 h-4" src={facebook} alt="Facebook Logo" />
                <span className=" text-sm">Facebook</span>
              </a>
            </div>

            <div className="ml-3">
              <a
                className="flex justify-center items-center gap-3 bg-white hover:bg-[#FAFBFC] text-gray-400 px-8 py-2 rounded-md border border-[#bfc8d1]"
                href="#"
              >
                <img className="w-4 h-4" src={google} alt="Google Logo" />
                <span className=" text-sm">Google</span>
              </a>
            </div>
          </div>

          <div className="flex mt-3 text-sm">
            <div>Don’t have an account in Sheba.xyz?</div>

            <div className="ml-3">
              <a
                className="text-[#C71E66] hover:text-white gap-3 bg-white hover:bg-[#C71E66] px-5 py-2 rounded-md text-xs font-semibold border border-[#C71E66]"
                href="#"
              >
                Signup Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
