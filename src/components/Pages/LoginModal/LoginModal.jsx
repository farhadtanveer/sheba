import React from "react";
import { RxCross2 } from "react-icons/rx";

const LoginModal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-[540px] h-[480px] rounded-sm">
        <div className="top-0 right-0 absolute w-10 h-10 rounded-full bg-white shadow-md grid place-items-center">
          <RxCross2 onClick={onClose} color="#C71E66" size={25} />
        </div>
        <p>modal</p>
      </div>
    </div>
  );
};

export default LoginModal;
