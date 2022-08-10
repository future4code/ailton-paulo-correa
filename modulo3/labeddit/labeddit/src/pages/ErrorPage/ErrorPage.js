import React from "react";
import { MiracleDiv } from "../../components/Global/GeneralStyle";
import { Logo1, Logo2, Logo3, Logo4 } from "../Login/style";
import {
  ButtonBack,
  ContarinerError,
  DivLogoError,
  TitleError,
  WarningError,
} from "./style";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ContarinerError>
      <DivLogoError>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
      </DivLogoError>
      <MiracleDiv size={"40px"} />
      <TitleError>LabEddit</TitleError>
      <WarningError>Página não encontrada!</WarningError>
      <ButtonBack onClick={() => goTo(navigate, "feed")}>Voltar</ButtonBack>
    </ContarinerError>
  );
}
