import React from "react";
import {
  FirstName,
  SecondName,
  PrincipalDiv,
  ImgRegister,
  Img,
  Form,
  FirstInput,
  SecondInput,
} from "./styles";
import register from "../../../assets/register.png";

function Register() {
  return (
    <PrincipalDiv>
      <ImgRegister>
        <Img src={register} alt="Register" />
      </ImgRegister>
      <Form>
        <h1>Healthy Register</h1>
        <p>Preencha os campos abaixo, para criar sua conta</p>
        <FirstName>Primeiro nome* </FirstName> <br />
        <FirstInput type="text" required placeholder="John" />
        <br /> <SecondName>Segundo nome* </SecondName> <br />
        <SecondInput type="text" required placeholder="Homesburg" />
        <br /> <label>Telefone* </label> <br />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          placeholder="000-000-0000"
        />
        <br /> <label>Email* </label> <br />
        <input type="email" required placeholder="example@gmail.com" />
        <br /> <label>Senha* </label> <br />
        <input type="password" required />
        <br /> <label>Confirmar senha* </label> <br />
        <input type="password" required />
        <br />
        <input type="checkbox" required />
        <label for="subscribeNews"> Subscreva a newsletter? </label>
        <br />
        <button type="submit">Enviar</button>
        <p>Já possui uma conta? FAZER LOGIN</p>
      </Form>
    </PrincipalDiv>
  );
}

export default Register;
