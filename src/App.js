import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <h1 className='text-7xl text-green-900 font-poppins '>AESS Dashboard</h1>
      <Routes>
        <Route element={<Signup />} path='/' />
      </Routes>
    </>
  );
};

export default App;
