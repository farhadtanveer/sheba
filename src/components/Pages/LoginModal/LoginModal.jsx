import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Login from "../Login/Login";
import Signup from "../Login/Signup";

const LoginModal = ({ visible, onClose }) => {
  const [showLogin, setShowLogin] = useState(true);
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  if (!visible) return null;

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-[540px] h-[480px] rounded-sm relative">
        <div className="absolute top-0 right-0 -mt-3 -mr-3">
          <div className="w-10 h-10 rounded-full bg-white shadow-md grid place-items-center">
            <RxCross2 onClick={onClose} color="#C71E66" size={25} />
          </div>
        </div>
        {showLogin ? (
          <Login toggleForm={toggleForm}></Login>
        ) : (
          <Signup toggleForm={toggleForm}></Signup>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
