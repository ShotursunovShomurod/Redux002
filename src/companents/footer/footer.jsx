import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt, FaTelegramPlane } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import Logo from '../../assets/react.png'

const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
        <div className="flex flex-col gap-5">
          <img
            className="w-32 h-10 object-contain"
            src={Logo}
            alt="Company Logo"
          />
          <div className="flex items-start gap-3">
            <IoLocationOutline className="text-2xl text-gray-600" />
            <p className="text-gray-800 text-sm">
              Address: 5171 W Campbell Ave
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaHeadphonesAlt className="text-2xl text-gray-600" />
            <p className="text-gray-800 text-sm">
              Undefined Kent, Utah 53127 United States
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaTelegramPlane className="text-2xl text-gray-600" />
            <p className="text-gray-800 text-sm">Email: sale@Nest.com</p>
          </div>
          <div className="flex items-start gap-3">
            <CiClock1 className="text-2xl text-gray-600" />
            <p className="text-gray-800 text-sm">Hours: 10:00 - 18:00, Mon - Sat</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <b className="text-xl font-bold text-gray-800">About Us</b>
          <p className="text-gray-700 text-sm">Delivery Information</p>
          <p className="text-gray-700 text-sm">Privacy Policy</p>
          <p className="text-gray-700 text-sm">Terms & Conditions</p>
          <p className="text-gray-700 text-sm">Contact Us</p>
          <p className="text-gray-700 text-sm">Support Center</p>
          <p className="text-gray-700 text-sm">Careers</p>
        </div>

        <div className="hidden lg:flex flex-col gap-5">
          <b className="text-xl font-bold text-gray-800">Account</b>
          <p className="text-gray-700 text-sm">Sign In</p>
          <p className="text-gray-700 text-sm">My Wishlist</p>
          <p className="text-gray-700 text-sm">Track My Order</p>
          <p className="text-gray-700 text-sm">Help Ticket</p>
          <p className="text-gray-700 text-sm">Shipping Details</p>
          <p className="text-gray-700 text-sm">Compare Products</p>
        </div>

        <div className="hidden lg:flex flex-col gap-5">
          <b className="text-xl font-bold text-gray-800">Corporate</b>
          <p className="text-gray-700 text-sm">Become a Vendor</p>
          <p className="text-gray-700 text-sm">Affiliate Program</p>
          <p className="text-gray-700 text-sm">Farm Business</p>
          <p className="text-gray-700 text-sm">Help Ticket</p>
          <p className="text-gray-700 text-sm">Farm Careers</p>
          <p className="text-gray-700 text-sm">Our Suppliers</p>
        </div>

        <div className="hidden lg:flex flex-col gap-5">
          <b className="text-xl font-bold text-gray-800">Popular</b>
          <p className="text-gray-700 text-sm">Become a Vendor</p>
          <p className="text-gray-700 text-sm">Affiliate Program</p>
          <p className="text-gray-700 text-sm">Farm Business</p>
          <p className="text-gray-700 text-sm">Help Ticket</p>
          <p className="text-gray-700 text-sm">Farm Careers</p>
          <p className="text-gray-700 text-sm">Cheese</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;