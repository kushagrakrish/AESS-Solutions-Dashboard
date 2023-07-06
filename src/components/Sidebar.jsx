import { Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <>
      <div className='h-screen top-0 bottom-0 left-0 sticky z-10 w-full  border'>
        <Image
          alt={"Logo Image"}
          objectFit={"cover"}
          src={Logo}
          className='flex flex-col items-center justify-center w-36 pt-8 ml-5 border-b'
        />
      </div>
    </>
  );
};

export default Sidebar;
