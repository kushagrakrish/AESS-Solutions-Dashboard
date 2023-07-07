import React from "react";
import search from "../assets/search.svg";

const SearchInput = () => {
  return (
    <div className='flex items-center'>
      <input
        type='text'
        placeholder='Search'
        className='border-b-2 border-#1296B0 bg-white pr-8 py-2 focus:outline-none'
      />
      <div className='relative'>
        <img
          src={search}
          alt='search'
          className='right-2 w-4 h-4 -top-2 pointer-events-none'
        />
      </div>
    </div>
  );
};

export default SearchInput;
