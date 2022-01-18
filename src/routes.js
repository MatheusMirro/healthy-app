import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Homepage from "./components/HomePage/index";
import Doctorpage from "./components/DoctorPage/index";
import UserPage from "./components/UserPage/index";
import Resgister from "./components/UserPage/RegisterUser/index";

const InRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/doctor" element={<Doctorpage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/register" element={<Resgister />} />
      </Routes>
    </Router>
  );
};

export default InRoutes;
