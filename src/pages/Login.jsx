import { FormControl, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginImage from "../assets/login.png";
import Logo from "../assets/logo.png";
import RightArrow from "../assets/right-arrow.svg";
import LoginFooter from "../components/LoginFooter";

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    localStorage.setItem("formData", JSON.stringify(formValue));

    // Navigate to ITDesk page
    window.location.href = "/itdesk";
  };

  return (
    <>
      <div className='h-screen w-full flex flex-col md:flex-row items-center justify-center gap-5 overflow-hidden'>
        <div className='bg-[#1296B0] w-1/2 h-screen hidden md:flex items-center justify-center overflow-hidden'>
          <Image
            alt={"Login Image"}
            src={LoginImage}
            className='w-full bg-cover 2xl:w-3/4'
          />
        </div>
        <div className='md:w-1/2 flex flex-col items-center justify-evenly h-full md:justify-evenly w-full '>
          {/* Logo Div */}
          <div className='mt-10'>
            <img
              alt={"Logo Image"}
              objectFit={"cover"}
              src={Logo}
              className='flex flex-col items-center justify-center'
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className=' w-11/12 lg:w-1/2 flex flex-col md:w-3/4 mb-20'
          >
            <h1 className='text-base text-[#1296B0] font-poppins font-semibold mb-1'>
              Login
            </h1>
            <FormControl>
              <input
                required
                type='email'
                name='email'
                value={formValue.email}
                onChange={handleChange}
                placeholder='Employee ID/Email ID'
                className='w-full border-[0.78px] text-sm font-normal border-[#1296B0] py-[10px] px-3 rounded-md placeholder:text-[#B9B9B9] mb-5'
              />
            </FormControl>
            <FormControl>
              <input
                required
                type='password'
                name='password'
                value={formValue.password}
                onChange={handleChange}
                placeholder='Enter Password'
                className='w-full border-[0.78px] text-sm font-normal border-[#1296B0] py-[10px] px-3 rounded-md placeholder:text-[#B9B9B9]'
              />
            </FormControl>
            <h1 className='text-xs flex justify-end text-[#1296B0] font-poppins font-semibold mt-1'>
              Forgot Password
            </h1>
            <button
              type='submit'
              className='bg-[#1296B0] py-3 mt-10 text-sm text-[#FFFFFF] font-semibold font-poppins rounded-md text-center w-full'
            >
              <div className='flex items-center justify-between'>
                <p className='text-center flex-grow'>Login to PeopleSol</p>
                <img src={RightArrow} alt='Right Arrow' className='w-7 mr-1' />
              </div>
            </button>
          </form>
          <div className='md:w-11/12 lg:w-2/3 '>
            <LoginFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
