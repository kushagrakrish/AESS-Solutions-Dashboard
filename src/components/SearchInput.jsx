import React from "react";

const SearchInput = () => {
  return (
    <div className='flex items-center'>
      <input
        type='text'
        placeholder='Search'
        className='border-b-2 border-#1296B0 bg-white pr-8 py-2 focus:outline-none'
      />
      <div className='relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#1296B0'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-5 w-5 absolute right-2 -top-2 pointer-events-none'
        >
          <circle cx='11' cy='11' r='8' />
          <line x1='21' y1='21' x2='16.65' y2='16.65' />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
