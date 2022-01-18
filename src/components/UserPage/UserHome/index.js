import React from "react";

import {
  UserSection,
  FirstInput,
  SecondInput,
  LabelSection,
  ButtonSection,
  ImageUser,
  Img,
  PasswordSection
} from "./styles";

import users from "../../../assets/users.svg";

const UserHome = () => {
  return (
    <div>
      <UserSection>
        <form>
          <ImageUser>
            <Img src={users} alt="doctor" />
          </ImageUser>
          <LabelSection>Digite seu usuário</LabelSection>
          <FirstInput type="text" placeholder="Enter your username" />
          <LabelSection>Digite sua senha</LabelSection>
          <SecondInput type="password" placeholder="Enter your password" />
          <PasswordSection href="#blank">Esqueci minha senha</PasswordSection> <br />
          <ButtonSection>Entrar</ButtonSection> <br />
        </form>
      </UserSection>
    </div>
  );
};

export default UserHome;
