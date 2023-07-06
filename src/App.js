import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import ItDesk from "./pages/ItDesk";
import Tickets from "./pages/Tickets";

const App = () => {
  return (
    <>
      {/* <h1 className='text-7xl text-green-900 font-poppins '>AESS Dashboard</h1> */}
      <Navbar />
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<ItDesk />} path='/itdesk' />
        <Route element={<Tickets />} path='/tickets' />
      </Routes>
    </>
  );
};

export default App;
