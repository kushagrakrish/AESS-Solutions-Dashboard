import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menu from "../assets/menu.svg";
import User from "../assets/user.png";

function MobileDrawer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setSelectedItem(path);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}> */}
      <img
        src={menu}
        alt='menu'
        ref={btnRef}
        colorScheme='teal'
        onClick={onOpen}
        className='w-1/12 mt-20'
      ></img>
      {/* </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
