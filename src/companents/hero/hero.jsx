import React, { memo } from "react";
import Logo from '../../assets/image.png'

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className=" container mx-auto object-contain m-auto w-full py-10">
      <img
        src={Logo}
        alt=""
        />
        </div>
    </div>
  );
};

export default memo(Hero);
