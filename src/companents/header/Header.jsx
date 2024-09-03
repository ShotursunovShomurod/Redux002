import React, { useState } from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto py-4 px-4 md:px-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="w-[130px] h-[50px] object-contain" src={logo} alt="Logo" />
        </Link>

        <nav className={`nav__collect flex-col md:flex-row gap-6 md:gap-4 ${isMenuOpen ? "show" : "hidden md:flex"}`}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CiHeart className="text-[24px] text-[#253D4E] hover:text-[#00A859]" />
              <NavLink
                className="text-[16px] font-bold text-[#253D4E] hover:text-[#00A859] transition-colors"
                to="/wishlist"
              >
                Wishlist
              </NavLink>
            </div>
            <div className="flex items-center gap-1">
              <IoCartOutline className="text-[24px] text-[#253D4E] hover:text-[#00A859]" />
              <NavLink
                className="text-[16px] font-bold text-[#253D4E] hover:text-[#00A859] transition-colors"
                to="/cart"
              >
                Cart
              </NavLink>
            </div>
            <button
              onClick={() => dispatch({ type: "LOGOUT" })}
              className="text-[14px] font-bold text-[#253D4E] hover:text-[#00A859]"
            >
              Logout
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div onClick={toggleMenu} className="navbar__menu md:hidden text-[#253D4E] text-[24px] cursor-pointer">
          <RiMenu2Fill />
        </div>
      </div>
    </header>
  );
};

export default Header;




// import React, { useState } from "react";
// import "./header.css";
// import { useDispatch, useSelector } from "react-redux";
// import { CiLocationOn } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import { IoPersonOutline } from "react-icons/io5";
// import { RiMenu2Fill } from "react-icons/ri";
// import { Link, NavLink } from "react-router-dom";
// import logo from '../../assets/logo.png'


// const Header = () => {

//   const dispatch = useDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <>
//       <div className="container mx-auto">
//         <div className=" flex items-center  gap-[69px] justify-between mt-5">
//           <Link to={"/"}>
//             <img
//               className="w-[130px] h-[50px] object-contain "
//               src={logo}
//               alt=""
//             />
//           </Link>

//           <div
//             className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
//           >
//             <div className="flex items-center gap-4 navbar navbar__collection">
//               <div className="flex items-center gap-1">
//                 <CiHeart className="text-[24px] " />
//                 <NavLink
//                   className={
//                     "text-[16px] font-bold text-[#253D4E] lg:text-[#7e7e7e] "
//                   }
//                   to={"/wishlist"}
//                 >
//                   Wishlist
//                 </NavLink>
//               </div>
//               <div className="flex items-center gap-1 navbar__collection">
//                 <IoCartOutline className="text-[24px] " />
//                 <NavLink
//                   className={
//                     "text-[16px] font-bold text-[#253D4E] lg:text-[#7e7e7e] "
//                   }
//                   to={"/Cart"}
//                 >
//                   Cart
//                 </NavLink>
//               </div>
//               <button
//                 onClick={() => dispatch({ type: "LOGOUT" })}
//                 className="border-none outline-none text-[14px] font-[700] text-[#253D4E] pl-2"
//               >
//                 LOGOUT
//               </button>
//             </div>
//           </div>
//           <div onClick={toggleMenu} className="navbar__menu">
//             <RiMenu2Fill />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
