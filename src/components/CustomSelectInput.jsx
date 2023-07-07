import React from "react";
import downArrow from "../assets/downArrow.png";

const CustomSelect = ({ options, placeholder }) => {
  return (
    <div className='relative rounded-lg'>
      <select
        required={true}
        id='serviceType'
        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:outline focus:border-1 focus:border-[#1296B0] appearance-none'
      >
        <option disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <img
        src={downArrow}
        alt='arrow'
        className='h-2 absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none '
      />
    </div>
  );
};

export default CustomSelect;
