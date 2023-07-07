import React, { useState } from "react";
import leftarrow from "../assets/lrftAngular.svg";
import rightArrow from "../assets/rightAngular.svg";

const DashboardTable = ({ data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.length / rowsPerPage);

  // Calculate the starting and ending index for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Get the subset of data for the current page
  const currentData = data?.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const options = ["10", "20", "30"];

  const [selectedOption, setSelectedOption] = useState("10");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setCurrentPage(1); // Reset current page when changing the number of rows per page
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          {/* Table content */}
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
              <th scope='col' className='px-6 py-3'>
                Request Number
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Service Type
              </th>
              <th scope='col' className='px-6 py-3'>
                Service Category
              </th>
              <th scope='col' className='px-6 py-3'>
                Description
              </th>
              <th scope='col' className='px-6 py-3'>
                Location
              </th>
              <th scope='col' className='px-6 py-3'>
                Assigned to
              </th>
              <th scope='col' className='px-6 py-3'>
                Created On
              </th>
            </tr>
          </thead>

          <tbody>
            {currentData?.map((row, index) => (
              <tr
                key={index}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
              >
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {row.action}
                </th>
                <td className='px-6 py-4'>{row.requestNumber}</td>
                <td className='px-6 py-4'>{row.status}</td>
                <td className='px-6 py-4'>{row.serviceType}</td>
                <td className='px-6 py-4'>{row.serviceCategory}</td>
                <td className='px-6 py-4'>{row.description}</td>
                <td className='px-6 py-4'>{row.location}</td>
                <td className='px-6 py-4'>{row.assignedTo}</td>
                <td className='px-6 py-4'>{row.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='py-3 flex w-full justify-between px-4'>
          <h2 className='text-sm font-medium'>
            Total Records Count: {data?.length}
          </h2>
          <div className='flex items-center gap-3'>
            <select
              required={true}
              id='rowsPerPage'
              className='py-1 w-12 border rounded-lg focus:border'
              value={selectedOption}
              onChange={handleChange}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='flex items-center gap-2 text-xs md:text-base'>
              <h1 className='w-full flex items-center text-center'>
                Records Per Page
                <div className='flex items-center gap-2'>
                  <button
                    className='w-6 h-6 text-xs md:text-base'
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    <img
                      src={leftarrow}
                      alt='Left Arrow'
                      className='w-full h-full'
                    />
                  </button>
                  {startIndex + 1} - {endIndex}
                  <button
                    className='w-6 h-6 text-xs md:text-base'
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    <img
                      src={rightArrow}
                      alt='Right Arrow'
                      className='w-full h-full'
                    />
                  </button>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
