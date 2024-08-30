import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/react.png'
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img
              className="w-32 h-12 object-contain"
              src={Logo}
              alt="Company Logo"
            />
          </Link>

          <nav className={`flex items-center gap-4 ${isMenuOpen ? "flex" : "hidden"} sm:flex`}>
            <NavLink
              to="/wishlist"
              className="flex items-center gap-1 text-gray-800"
            >
              <CiHeart className="text-2xl" />
              <sup className="text-[18px] text-blue-300">{wishlist.length}</sup>
              <span className="text-[#253D4E] font-bold text-sm">WISHLIST</span>
            </NavLink>
            <NavLink
              to="/cart"
              className="flex items-center gap-1 text-gray-800"
            >
              <IoCartOutline className="text-2xl" />
              <sup className="text-[18px] text-blue-300">{cart.length}</sup>
              <span className="text-[#253D4E] font-bold text-sm">CART</span>
            </NavLink>
            <button
              onClick={() => dispatch({ type: "LOGOUT" })}
              className="text-[#253D4E] font-bold text-sm"
            >
              LOGOUT
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className="text-2xl sm:hidden"
          >
            <RiMenu2Fill />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg z-50 flex flex-col items-center py-4 sm:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl"
          >
            &times;
          </button>
          <NavLink
            to="/wishlist"
            className="text-gray-800 text-lg mb-4"
            onClick={toggleMenu}
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/cart"
            className="text-gray-800 text-lg mb-4"
            onClick={toggleMenu}
          >
            Cart
          </NavLink>
          <button
            onClick={() => dispatch({ type: "LOGOUT" })}
            className="text-[#253D4E] font-bold text-lg"
          >
            LOGOUT
          </button>
        </div>
      )}
    </>
  );
};

export default Header;