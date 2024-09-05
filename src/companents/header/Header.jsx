import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import axios from "../../api/index";
import navlogo from '../../assets/Navlogo.png'
const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/admin/profile").then((res) => {
      dispatch({ type: "SET_PROFILE", payload: res.data.payload });
    });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div className="bg-black text-white">
  <div className="container mx-auto px-4">
    {/* Navbar */}
    <div className="flex items-center justify-between py-5">
      <Link to={"/"}>
        <img
          className="w-[130px] h-[50px] object-contain"
          src={navlogo}
          alt="Logo"
        />
      </Link>

      {/* Menu - Large Screens */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CiHeart className="text-[24px]" />
            <NavLink
              className="text-[16px] font-[400] text-[#fff] hover:text-[#7e7e7e] transition-all duration-200"
              to={"/wishlist"}
            >
              Wishlist
            </NavLink>
          </div>
          <div className="flex items-center gap-1">
            <IoCartOutline className="text-[24px]" />
            <NavLink
              className="text-[16px] font-[400] text-[#fff] hover:text-[#7e7e7e] transition-all duration-200"
              to={"/cart"}
            >
              Cart
            </NavLink>
          </div>
          <button
            onClick={() => dispatch({ type: "LOGOUT" })}
            className="border-none outline-none text-[14px] font-[700] text-[#fff] bg-[#253D4E] py-2 px-4 rounded hover:bg-[#3b5f70] transition-all duration-200"
          >
            LOGOUT
          </button>
        </div>
      </div>

      {/* Menu Icon - Mobile */}
      <div onClick={toggleMenu} className="lg:hidden text-[24px] cursor-pointer">
        <RiMenu2Fill />
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`${
        isMenuOpen ? "block" : "hidden"
      } lg:hidden nav__collect flex flex-col gap-4 py-4 border-t border-[#333]`}
    >
      <NavLink
        className="text-[16px] font-[400] text-[#fff] hover:text-[#7e7e7e] transition-all duration-200"
        to={"/wishlist"}
      >
        Wishlist
      </NavLink>
      <NavLink
        className="text-[16px] font-[400] text-[#fff] hover:text-[#7e7e7e] transition-all duration-200"
        to={"/cart"}
      >
        Cart
      </NavLink>
      <button
        onClick={() => dispatch({ type: "LOGOUT" })}
        className="border-none outline-none text-[14px] font-[700] text-[#fff] bg-[#253D4E] py-2 px-4 rounded hover:bg-[#3b5f70] transition-all duration-200"
      >
        LOGOUT
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default memo(Header);
