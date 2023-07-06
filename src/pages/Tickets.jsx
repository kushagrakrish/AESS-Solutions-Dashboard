import React from "react";
import Plus from "../assets/Plus.svg";
import Square from "../assets/sqaure.svg";
import filter from "../assets/filter.png";
import SearchInput from "../components/SearchInput";
import Download from "../assets/download.png";
import { useDisclosure, Button } from "@chakra-ui/react";
import TicketModal from "../components/FormModal";

const Tickets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className='m-2 mt-5 md:m-10 p-2 md:p-5 bg-[#FFFFFF] shadow-lg rounded-2xl'>
        <div className='w-full flex flex-col gap-3 items-center justify-between md:flex-row md:gap-0'>
          <div className='flex items-center gap-3'>
            <Button
              colorScheme='blue'
              py={2}
              px={2}
              rounded='md'
              onClick={onOpen}
              className='flex items-center font-poppins font-medium text-xs'
            >
              <img src={Plus} className='w-6' alt='Plus Icon' />
              <span>Raise IT Desk Ticket</span>
            </Button>
            <div className='flex items-center gap-2.5'>
              <img src={Square} className='w-6' alt='Square Icon' />
              <h2 className='text-[#1296B0] text-sm lg:text-base font-poppins font-medium'>
                My Request
              </h2>
            </div>
          </div>
          {/*  */}
          <div className='flex items-center gap-3'>
            <SearchInput />
            <img src={filter} alt='' className='w-6' />
            <img src={Download} alt='' className='w-6' />
          </div>
        </div>
      </div>
      <TicketModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Tickets;