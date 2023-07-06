import { Image } from "@chakra-ui/react";
import React from "react";
import Avatar from "../assets/Avatar.png";
import leftArrow from "../assets/leftarrow.png";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className='w-full flex items-center justify-between px-8 gap-2 lg:flex-row top-0 bottom-0 left-0 sticky border border-[#E6E6E6] py-3 z-50 bg-white'>
        <div className='flex items-center justify-between gap-20'>
          <Image
            alt={"Logo Image"}
            objectFit={"cover"}
            src={Logo}
            className='flex flex-col items-center justify-center w-36 cursor-pointer'
          />
          <div className='border-l border-[#E6E6E6] hidden md:block'>
            <div className='flex items-center ml-5'>
              <img src={leftArrow} alt='' />
              <p className='text-sm uppercase'>ITSM</p>
            </div>
            <h3 className='text-lg text-[#1296B0] font-poppins font-semibold ml-5'>
              Dashboard
            </h3>
          </div>
        </div>
        <Image
          alt={"Logo Image"}
          objectFit={"cover"}
          src={Avatar}
          className='flex flex-col items-center justify-center w-10'
        />
      </nav>
    </>
  );
};

export default Navbar;
