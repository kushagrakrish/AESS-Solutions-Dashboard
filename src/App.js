import React from "react";
import { Route, Routes } from "react-router-dom";
import ItDesk from "./pages/ItDesk";
import Login from "./pages/Login";
import Tickets from "./pages/Tickets";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<ItDesk />} path='/itdesk' />
        <Route element={<Tickets />} path='/tickets' />
      </Routes>
    </>
  );
};

export default App;
