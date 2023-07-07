import React, { useEffect } from "react";
import Plus from "../assets/Plus.svg";
import Square from "../assets/sqaure.svg";
import filter from "../assets/filter.png";
import SearchInput from "../components/SearchInput";
import Download from "../assets/download.png";
import { useDisclosure, Button } from "@chakra-ui/react";
import TicketModal from "../components/FormModal";
import DashboardTable from "../components/DashboardTable";
import { tableData } from "../constants/data";
import Layout from "../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const Tickets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rowsPerPage = 10;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const isLoggedIn = storedFormData && location.pathname !== "/";
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate, location]);

  return (
    <>
      <Layout>
        <div className='m-2 mt-5 md:m-0 p-2 md:p-5 bg-[#FFFFFF] shadow-lg rounded-2xl'>
          <div className='w-full flex flex-col gap-3 items-center justify-between md:flex-row md:gap-0'>
            <div className='flex items-center gap-3'>
              <button
                onClick={onOpen}
                style={{
                  background:
                    "linear-gradient(rgba(18, 150, 176, 1) rgba(17, 127, 149, 1))",
                }}
                className='flex items-center font-poppins px-2 py-2 rounded-md btn-color font-medium text-xs bg-[#1296B0] text-white'
              >
                <img src={Plus} className='w-6' alt='Plus Icon' />
                <span>Raise IT Desk Ticket</span>
              </button>
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
          {/*  */}
          <div className='mt-5'>
            <DashboardTable data={tableData} rowsPerPage={rowsPerPage} />
          </div>
        </div>
        <TicketModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </>
  );
};

export default Tickets;
