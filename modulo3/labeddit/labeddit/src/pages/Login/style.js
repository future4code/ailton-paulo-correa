import styled from "styled-components";
import { Button1, Label } from "../../components/Global/GeneralStyle";

export const ContainerLogin = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 33px;
  @media screen and (min-width: 600px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 84px;
  margin: 0 auto;
  margin-bottom: 12px;
  margin-top: 100px;
  width: 84px;
`;

export const Logo1 = styled.div`
  background-color: #fe7e02;
  border-radius: 100px 0 0 0;
  height: 42px;
  width: 42px;
`;

export const Logo2 = styled(Logo1)`
  background-color: #45525b;
`;

export const Logo3 = styled(Logo1)`
  background-color: #f9b24e;
  border-radius: 0 0 100px 0;
`;

export const Logo4 = styled(Logo1)`
  background-color: #a8bbc6;
  border-radius: 0 0 100px 0;
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

export const PlaceHolderName = styled(Label)``;

export const PlaceHolderPW = styled(Label)``;

export const ButtonLogin = styled(Button1)``;

export const ButtonNewRegister = styled(Button1)`
  background-image: unset;
  background-color: #ffffff;
  border: 1px solid #fe7e02;
  color: #fe7e02;
  margin-top: 0px;
`;
