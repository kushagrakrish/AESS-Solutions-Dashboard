import React, { useEffect, useState } from "react";
import ItCharts from "../components/ItCharts";
import Layout from "../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const ItDesk = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const dates = [
    { value: "2023-07-01", label: "20.5.2023 - 20.06.2023" },
    { value: "2023-07-02", label: "20.7.2023 - 20.08.2023" },
    { value: "2023-07-03", label: "20.9.2023 - 20.10.2023" },
  ];
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
        <div className='m-2 mt-5 md:m-10 p-2 md:p-5 bg-[#FFFFFF] shadow-lg rounded-2xl'>
          {/* Heading */}
          <div className='flex items-center justify-center'>
            <h1 className='text-lg font-poppins font-semibold text-[#1296B0] border-b-2 text-center pb-1 border-[#1296B0] inline-block'>
              IT Desk
            </h1>
          </div>
          {/* Second Shadow Card */}
          <div className='m-2 md:m-3 bg-[#FFFFFF] shadow-lg rounded-xl'>
            <div className='flex flex-col gap-3 items-center justify-center p-3 md:p-5 md:flex-row md:justify-between w-full'>
              <h1 className='text-sm text-[#555555] font-poppins font-semibold'>
                Top Requests - 20/05/2023 and 20/06/2023
              </h1>
              <div className='flex items-start'>
                <select
                  className=' border border-gray-400 px-2 rounded-lg py-2 '
                  id='dateSelect'
                  value={selectedDate}
                  onChange={handleDateChange}
                >
                  {dates.map((date) => (
                    <option
                      className='w-full'
                      key={date.value}
                      value={date.value}
                    >
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Charts Component */}
            <ItCharts />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ItDesk;
