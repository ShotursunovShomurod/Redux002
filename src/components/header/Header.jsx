import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'


const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
<div className="container mx-auto px-4">
  <div className="flex items-center justify-between gap-6 mt-5">
    <Link to={"/"}>
      <img
        className="w-[130px] h-[50px] object-contain"
        src={logo}
        alt="Logo"
      />
    </Link>
    <div
      className={`nav__collect flex gap-3 ${
        isMenuOpen ? "flex" : "hidden"
      } lg:flex lg:gap-6`}
    >
      <div className="flex items-center gap-4 navbar navbar__collection">
        <div className="flex items-center gap-1">
          <CiHeart className="text-[24px] text-gray-800" />
          <NavLink
            className="text-[16px] font-[400] text-gray-800 lg:text-[#7e7e7e]"
            to={"/wishlist"}
          >
            Wishlist
          </NavLink>
        </div>
        <div className="flex items-center gap-1 navbar__collection">
          <IoCartOutline className="text-[24px] text-gray-800" />
          <NavLink
            className="text-[16px] font-[400] text-gray-800 lg:text-[#7e7e7e]"
            to={"/Cart"}
          >
            Cart
          </NavLink>
        </div>
        <button
          onClick={() => dispatch({ type: "LOGOUT" })}
          className="text-[14px] font-[700] text-[#253D4E] pl-2"
        >
          LOGOUT
        </button>
      </div>
    </div>
    <div
      onClick={toggleMenu}
      className="navbar__menu text-[24px] cursor-pointer lg:hidden"
    >
      <RiMenu2Fill />
    </div>
  </div>
</div>

    </>
  );
};

export default Header;
