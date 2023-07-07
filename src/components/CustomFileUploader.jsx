import React, { useRef } from "react";
import Clip from "../assets/clip.png";

const FileUpload = () => {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='file-upload w-full h-full relative rounded-lg focus:outline-none focus:outline focus:border-1 focus:border-[#1296B0] appearance-none'>
      <input
        type='file'
        accept='*'
        onChange={handleFileInputChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <div className='file-upload-input'>
        <input
          onClick={handleButtonClick}
          type='text'
          placeholder='Attach'
          className='px-3 py-2 border rounded-lg w-full focus:outline-none focus:outline focus:border-1 focus:border-[#1296B0]'
          style={{ backgroundColor: "white" }}
          readOnly
        />

        <img src={Clip} alt='' className='h-5 absolute top-2 left-[90%] ' />
      </div>
    </div>
  );
};

export default FileUpload;
