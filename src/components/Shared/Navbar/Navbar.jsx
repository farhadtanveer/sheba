import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/sheba.svg";
import LoginModal from "../../Pages/LoginModal/LoginModal";

const Navbar = () => {
  const [showLoginModal, setLoginModal] = useState(false);

  const handleOnClose = () => setLoginModal(false);

  return (
    <div className="shadow-md w-full fixed z-10 top-0 left-0 bg-white">
      <div className="my-container md:flex items-center justify-between px-3 py-3">
        <div className="font-bold text-2xl tracking-wider cursor-pointer">
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="md:flex items-center gap-9 font-bold text-md tracking-wide cursor-pointer">
          <li>All Services</li>
          <button onClick={() => setLoginModal(true)}>Login</button>
        </ul>
      </div>

      <LoginModal onClose={handleOnClose} visible={showLoginModal}></LoginModal>
    </div>
  );
};

export default Navbar;
