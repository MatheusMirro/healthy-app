import React from "react";
import DoctorHome from "../DoctorPage/DoctorHome";
import UserHome from "../UserPage/UserHome";

// import { Title } from "./styles";

const Homepage = () => {
  return (
    <div>
      {/* <Title>Master Healthy</Title> */}
      <DoctorHome />
      <UserHome />
    </div>
  );
};

export default Homepage;
