import React from "react";
import Logo from "../assets/logo.png";
import { Image } from "@chakra-ui/react";

const LoginFooter = () => {
  return (
    <>
      <div className='flex items-center justify-between '>
        <Image alt={"Logo Image"} objectFit={"cover"} src={Logo} width={100} />
        <div className='flex items-center gap-2'>
          <p className='text-xs text-[#1296B0] font-normal font-poppins'>
            Privacy Policy
          </p>
          <p className='text-xs text-[#1296B0] font-normal font-poppins'>
            Terms and Condition
          </p>
        </div>
      </div>
      <div className='border-b border-[#1296B0] my-3' />
      <p className='text-sm text-[#000000] font-poppins font-normal text-center'>
        ©2022 . All rights reserved. Made in India.❤️
      </p>
    </>
  );
};

export default LoginFooter;
