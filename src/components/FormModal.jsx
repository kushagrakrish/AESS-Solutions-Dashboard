import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import close from "../assets/close.png";
import { serviceTypeOptions } from "../constants/data";
import CustomSelect from "./CustomSelectInput";
import Clip from "../assets/clip.png";

const TicketModal = ({ isOpen, onClose }) => {
  // State for ticket form fields
  const [ticketData, setTicketData] = useState({
    title: "",
    description: "",
    // Add more fields as needed
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    // ...
    // Close the modal after form submission
    onClose();
  };

  return (
    <Modal isCentered size={"2xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          shadow={"xl"}
          className='text-[#1296B0] font-medium w-full flex items-center justify-between'
        >
          IT Desk Ticket
          <img
            src={close}
            alt='close'
            className='w-5 cursor-pointer'
            onClick={onClose}
          />
        </ModalHeader>

        <ModalBody className='flex items-center bg-[#FAF9F8]' width={"full"}>
          <div className='container mx-auto p-0 md:p-8 w-full'>
            <form className='grid grid-cols-2 gap-4 w-full'>
              <div>
                <label
                  htmlFor='serviceType'
                  className='block font-normal text-[#555555] mb-1 required'
                >
                  Service Type
                </label>

                <CustomSelect options={serviceTypeOptions} />
              </div>

              <div>
                <label
                  htmlFor='location'
                  className='block font-normal text-[#555555] mb-1 required'
                >
                  Location
                </label>

                <input
                  id='location'
                  type='text'
                  placeholder='Select Location'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
              </div>
              <div>
                <label
                  htmlFor='priority'
                  className='block font-normal text-[#555555] mb-1 required'
                >
                  Priority
                </label>

                <CustomSelect options={serviceTypeOptions} />
              </div>
              <div className='flex relative bg-white'>
                <label
                  htmlFor='attachment'
                  className='block font-normal text-[#555555] mb-1 border w-full relative'
                >
                  Upload
                  <span className='absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none'>
                    <img src={Clip} alt='' className='h-5' />
                  </span>
                  <input
                    id='attachment'
                    type='file'
                    className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hidden'
                    placeholder='Attach'
                  />
                </label>
              </div>

              <div className='col-span-2'>
                <label
                  htmlFor='description'
                  className='block font-normal text-[#555555] mb-1 required'
                >
                  Description
                </label>

                <textarea
                  id='description'
                  placeholder='Enter Description'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
              </div>
              <div className='col-span-2 flex justify-end gap-5 mt-36'>
                <button
                  className='bg-[#FFFFFF] text-xs shadow-md text-[#F71D1D] shadow-[#CFCFCF] font-medium px-10 py-2 md:text-base'
                  type='button'
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className='bg-[#1296B0] text-xs text-white px-1 py-2 rounded-lg md:px-4 md:text-base'
                  type='submit'
                >
                  Raise IT Desk Ticket
                </button>
              </div>
            </form>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TicketModal;
