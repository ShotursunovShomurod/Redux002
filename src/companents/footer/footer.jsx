import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt, FaTelegramPlane } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        <div className="flex flex-col gap-6">
          <img
            className="w-[150px] object-contain"
            src={logo}
            alt="Company Logo"
          />
          <div className="flex items-start gap-3">
            <IoLocationOutline size={24} className="text-[#253D4E]" />
            <p className="text-[#253D4E] text-[14px]">
              Address: 5171 W Campbell Ave, Kent, Utah 53127, United States
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaHeadphonesAlt size={24} className="text-[#253D4E]" />
            <p className="text-[#253D4E] text-[14px]">Phone: +1 800 123 456</p>
          </div>
          <div className="flex items-start gap-3">
            <FaTelegramPlane size={24} className="text-[#253D4E]" />
            <p className="text-[#253D4E] text-[14px]">Email: sale@Nest.com</p>
          </div>
          <div className="flex items-start gap-3">
            <CiClock1 size={24} className="text-[#253D4E]" />
            <p className="text-[#253D4E] text-[14px]">
              Hours: 10:00 - 18:00, Mon - Sat
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <b className="text-[20px] text-[#253D4E] font-bold">About Us</b>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Delivery Information
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Contact Us
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Support Center
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">Careers</p>
        </div>

        <div className="flex flex-col gap-4">
          <b className="text-[20px] text-[#253D4E] font-bold">Account</b>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">Sign In</p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            My Wishlist
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Track My Order
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Help Ticket
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Shipping Details
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Compare Products
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <b className="text-[20px] text-[#253D4E] font-bold">Corporate</b>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Become a Vendor
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Affiliate Program
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Farm Business
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Help Ticket
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Farm Careers
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Our Suppliers
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <b className="text-[20px] text-[#253D4E] font-bold">Popular</b>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Become a Vendor
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Affiliate Program
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Farm Business
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Help Ticket
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">
            Farm Careers
          </p>
          <p className="text-[14px] text-[#253D4E] cursor-pointer">Cheese</p>
        </div>
      </div>
      <hr className="border-t border-[#e0e0e0]" />
      <div className="flex flex-col items-center mt-6">
        <p className="text-[15px] text-[#0009] text-center">
          © 2022, Nest - HTML Ecommerce Template
        </p>
        <p className="text-[12px] text-center text-[#0009]">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;