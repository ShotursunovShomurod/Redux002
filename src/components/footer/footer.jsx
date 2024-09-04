import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
<div className="container mx-auto mt-10 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
    <div className="flex flex-col gap-5">
      <img
        className="w-[150px] object-contain h-[50px]"
        src={logo}
        alt="Logo"
      />
      <div className="flex items-start gap-3">
        <button className="text-[#253D4E] text-[24px]">
          <IoLocationOutline />
        </button>
        <p className="text-[#253D4E] text-[14px]">
          Address: 5171 W Campbell Ave
        </p>
      </div>
      <div className="flex items-start gap-3">
        <button className="text-[#253D4E] text-[24px]">
          <FaHeadphonesAlt />
        </button>
        <p className="text-[#253D4E] text-[14px]">
          Kent, Utah 53127 United State
        </p>
      </div>
      <div className="flex items-start gap-3">
        <button className="text-[#253D4E] text-[24px]">
          <FaTelegramPlane />
        </button>
        <p className="text-[#253D4E] text-[14px]">Email: sale@Nest.com</p>
      </div>
      <div className="flex items-start gap-3">
        <button className="text-[#253D4E] text-[24px]">
          <CiClock1 />
        </button>
        <p className="text-[#253D4E] text-[14px]">
          Hours: 10:00 - 18:00, Mon - Sat
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-5">
      <b className="text-[22px] text-[#253D4E] font-[700]">About Us</b>
      <p className="text-[14px] text-[#253D4E]">Delivery Information</p>
      <p className="text-[14px] text-[#253D4E]">Privacy Policy</p>
      <p className="text-[14px] text-[#253D4E]">Terms & Conditions</p>
      <p className="text-[14px] text-[#253D4E]">Contact Us</p>
      <p className="text-[14px] text-[#253D4E]">Support Center</p>
      <p className="text-[14px] text-[#253D4E]">Careers</p>
    </div>

    <div className="hidden lg:flex flex-col gap-5">
      <b className="text-[22px] text-[#253D4E] font-[700]">Account</b>
      <p className="text-[14px] text-[#253D4E]">Sign In</p>
      <p className="text-[14px] text-[#253D4E]">My Wishlist</p>
      <p className="text-[14px] text-[#253D4E]">Track My Order</p>
      <p className="text-[14px] text-[#253D4E]">Help Ticket</p>
      <p className="text-[14px] text-[#253D4E]">Shipping Details</p>
      <p className="text-[14px] text-[#253D4E]">Compare Products</p>
    </div>

    <div className="hidden md:flex flex-col gap-5">
      <b className="text-[22px] text-[#253D4E] font-[700]">Corporate</b>
      <p className="text-[14px] text-[#253D4E]">Become a Vendor</p>
      <p className="text-[14px] text-[#253D4E]">Affiliate Program</p>
      <p className="text-[14px] text-[#253D4E]">Farm Business</p>
      <p className="text-[14px] text-[#253D4E]">Help Ticket</p>
      <p className="text-[14px] text-[#253D4E]">Farm Careers</p>
      <p className="text-[14px] text-[#253D4E]">Our Suppliers</p>
    </div>

    <div className="hidden md:flex flex-col gap-5">
      <b className="text-[22px] text-[#253D4E] font-[700]">Popular</b>
      <p className="text-[14px] text-[#253D4E]">Become a Vendor</p>
      <p className="text-[14px] text-[#253D4E]">Affiliate Program</p>
      <p className="text-[14px] text-[#253D4E]">Farm Business</p>
      <p className="text-[14px] text-[#253D4E]">Help Ticket</p>
      <p className="text-[14px] text-[#253D4E]">Farm Careers</p>
      <p className="text-[14px] text-[#253D4E]">Cheese</p>
    </div>
  </div>
</div>
  );
};

export default Footer;
