import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setSelectedItem(path);
  };

  return (
    <>
      <div className='h-screen left-0 fixed z-10 w-52 px-4'>
        <div className='rounded-md shadow-md mt-32 bg-white xl:w-11/12 lg:w-full'>
          <Link
            to='/itDesk'
            className={`flex items-center gap-2 px-2 py-3.5 ${
              selectedItem === "/itDesk"
                ? "bg-[#E9F3F4] border-l-8 border-[#1296B0] rounded-md"
                : ""
            }`}
            onClick={() => handleItemClick("/itDesk")}
          >
            <img src={User} alt='' className='w-6' />
            <h2 className='text-[#1296B0] font-medium text-xs xl:text-sm'>
              IT Dashboard
            </h2>
          </Link>
          <Link
            to='/tickets'
            className={`flex items-center gap-2 px-2 py-3.5 ${
              selectedItem === "/tickets"
                ? "bg-[#E9F3F4] border-l-8 border-[#1296B0] rounded-md"
                : ""
            }`}
            onClick={() => handleItemClick("/tickets")}
          >
            <img src={User} alt='' className='w-6' />
            <h2 className='text-[#1296B0] font-medium text-xs xl:text-sm'>
              Tickets
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
