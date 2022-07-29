import styled from "styled-components";
import {
  Button1,
  DivInput,
  Form,
  Input,
  Label,
} from "../../components/Global/GeneralStyle";

export const ContarinerRegister = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  @media screen and (min-width: 600px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const TitleRegister = styled.h2`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 33px;
  font-weight: 700;
  margin-top: 29px;
`;

export const FormRegister = styled(Form)`
  margin-top: 195px;
`;

export const DivInputRegister = styled(DivInput)``;

export const PlaceHolderName = styled(Label)``;

export const PlaceHolderEmail = styled(Label)``;

export const PlaceHolderPW = styled(Label)``;

export const ButtonRegister = styled(Button1)`
  margin-top: 28px;
`;

export const TermText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-top: 65px;
`;
export const HyperText = styled.strong`
  color: #4088cb;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const DivTermAccept = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 17px;
`;

export const TermAccept = styled.label`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-top: 0;
  cursor: pointer;
`;

export const CheckBoxTerm = styled(Input)`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
