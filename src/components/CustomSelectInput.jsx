import React from "react";
import downArrow from "../assets/downArrow.png";

const CustomSelect = ({ options }) => {
  return (
    <div className='relative'>
      <select
        required={true}
        id='serviceType'
        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none'
      >
        <option disabled selected>
          Select Service Type
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
