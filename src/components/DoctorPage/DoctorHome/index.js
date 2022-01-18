import React from "react";
import {
  Line,
  DoctorSection,
  FirstInput,
  SecondInput,
  LabelSection,
  ButtonSection,
  ImageDoctor,
  Img,
  PrincipalDiv,
} from "./styles";

import doctors from "../../../assets/doctors.svg";

const DoctorHome = () => {
  return (
    <PrincipalDiv>
      <Line />
      <DoctorSection>
        <ImageDoctor>
          <Img src={doctors} alt="doctor" />
        </ImageDoctor>
        <form>
          <LabelSection>Digite seu usuário</LabelSection>
          <FirstInput type="text" placeholder="Enter your username" />
          <LabelSection>Digite sua senha</LabelSection>
          <SecondInput type="password" placeholder="Enter your password" />
          <ButtonSection>Entrar</ButtonSection>
        </form>
      </DoctorSection>
    </PrincipalDiv>
  );
};

export default DoctorHome;
