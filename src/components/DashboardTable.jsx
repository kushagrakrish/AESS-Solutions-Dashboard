import React, { useState } from "react";
import { tableData } from "../constants/data";

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
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='px-6 py-3'>
                Action
              </th>
              <th scope='col' class='px-6 py-3'>
                Request Number
              </th>
              <th scope='col' class='px-6 py-3'>
                Status
              </th>
              <th scope='col' class='px-6 py-3'>
                Service Type
              </th>
              <th scope='col' class='px-6 py-3'>
                Service Category
              </th>
              <th scope='col' class='px-6 py-3'>
                Description
              </th>
              <th scope='col' class='px-6 py-3'>
                Location
              </th>
              <th scope='col' class='px-6 py-3'>
                Assigned to
              </th>
              <th scope='col' class='px-6 py-3'>
                Created On
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData?.map((row, index) => (
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
          <h2 className='text-sm font-medium'>Total Records Count: 72</h2>
          <div className='flex items-center gap-3'>
            <select
              required={true}
              id='serviceType'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
              <option disabled selected>
                10
              </option>
            </select>
            <div className='flex items-center gap-2'>
              <h1 className='w-full text-center'>Records Per Page 1 - 8</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
