import styled from "styled-components";

export const PrincipalDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

// STYLING DOCTOR
export const DoctorSection = styled.div`
  display: grid;
  grid-area: 2 / 2 / 6 / 4;
  width: 50%;
  justify-content: center;
  top: 20%;
  align-items: center;
  align-content: center;
`;

export const FirstInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #12130f;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;
  font-family: roboto, sans-serif;
`;

export const SecondInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #12130f;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;
  font-family: roboto, sans-serif;
`;

export const LabelSection = styled.label`
  display: flex;
  text-transform: uppercase;
  font-size: 0.9em;
  color: #12130f;
  padding-top: 15px;
  font-family: roboto, sans-serif;
`;

export const ButtonSection = styled.button`
  background-color: #6b5b95;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;

export const ImageDoctor = styled.div`
  max-width: 555px;
`;

export const Img = styled.img`
  width: 300px;
`;

export const Line = styled.div`
  border-left: 2.5px solid gray;
  margin-top: 170px;
  height: 70%;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
`;
