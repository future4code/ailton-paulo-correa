import styled from "styled-components";
import { Button1 } from "../../components/Global/GeneralStyle";
import { DivLogo, TitleLogin } from "../Login/style";

export const ContarinerError = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 32px;
`;

export const DivLogoError = styled(DivLogo)`
  transform: scale(1.7);
  margin: 0 auto;
`;

export const WarningError = styled(TitleLogin)`
  font-size: 24px;
`;
export const TitleError = styled(TitleLogin)`
  transform: scale(1.2);
`;

export const ButtonBack = styled(Button1)`
  margin-top: 20px;
`;
