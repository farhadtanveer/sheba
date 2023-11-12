import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/sheba.svg";

const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="max-w-screen-lg mx-auto md:flex items-center justify-between bg-white py-3">
        <div className="font-bold text-2xl tracking-wider cursor-pointer">
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="md:flex items-center gap-9 font-bold text-md tracking-wide cursor-pointer">
          <li>All Services</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
