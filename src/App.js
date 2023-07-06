import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ItDesk from "./pages/ItDesk";
import Login from "./pages/Login";
import Tickets from "./pages/Tickets";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const storedFormData = localStorage.getItem("formData");
  //   const isLoggedIn = storedFormData && location.pathname !== "/";
  //   if (isLoggedIn) {
  //     navigate("/itdesk");
  //   } else {
  //     navigate("/");
  //   }
  // }, [navigate, location]);
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
