import styled from "styled-components";
import { Label } from "../../components/Global/GeneralStyle";

export const ContainerLogin = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 0 33px;
`;

export const DivLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 84px;
  margin: 0 auto;
  margin-bottom: 12px;
  width: 84px;
`;

export const Logo1 = styled.div`
  background-color: #fe7e02;
  border-radius: 100px 0 0 0;
  height: 42px;
  width: 42px;
`;

export const Logo2 = styled.div`
  background-color: #45525b;
  border-radius: 100px 0 0 0;
  height: 42px;
  width: 42px;
`;

export const Logo3 = styled.div`
  background-color: #f9b24e;
  border-radius: 0 0 100px 0;
  height: 42px;
  width: 42px;
`;

export const Logo4 = styled.div`
  background-color: #a8bbc6;
  border-radius: 0 0 100px 0;
  height: 42px;
  width: 42px;
`;

export const TitleLogin = styled.h1`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 46.8px;
  text-align: center;
`;

export const SubTitleLogin = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 107px;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
`;

export const Input = styled.input`
  border: none;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  height: 60px;
  padding: 29px 17px 9px 17px;
`;

export const PlaceHolderName = styled(Label)``;

export const PlaceHolderPW = styled(Label)``;

export const ButtonLogin = styled.button`
  background-image: linear-gradient(90deg, #ff6489, #f9b24e);
  border: none;
  border-radius: 27px;
  color: #ffffff;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  height: 51px;
  line-height: 24.5px;
  margin-top: 48px;
`;

export const LineDivisor = styled.div`
  background-image: linear-gradient(90deg, #ff6489, #f9b24e);
  height: 1.7px;
  margin: 18px 0;
`;

export const ButtonNewRegister = styled(ButtonLogin)`
  background-image: unset;
  background-color: #ffffff;
  border: 1px solid #fe7e02;
  color: #fe7e02;
  margin-top: 0px;
`;
