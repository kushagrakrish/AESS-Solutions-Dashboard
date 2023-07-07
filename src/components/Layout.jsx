import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex w-full items-start relative '>
        <div className='lg:hidden absolute top-5 left-5'>
          <MobileDrawer />
        </div>
        <div className='flex-shrink-0 w-52 sticky hidden lg:block'>
          <Sidebar />
        </div>
        <div className='flex-1 '>
          <div className='w-full left-0 fixed'>
            <Navbar />
          </div>
          <div className='bg-[#ffff] h-screen mt-32'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
