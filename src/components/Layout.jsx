import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex w-full items-start '>
        <div className='lg:w-1/6'>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <Navbar />
          <div
            // style={{ width: "calc(100% - 40px)" }}
            className='px-[32px] py-8  bg-[#aaaaaa]  min-h-screen'
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
