import React from "react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";
import {
  ButtonHeader,
  ContainerHeader,
  DivLogo,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
} from "./style";

export default function Header() {
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      <DivLogo>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
      </DivLogo>
      <ButtonHeader onClick={() => goTo(navigate, "")}>Entrar</ButtonHeader>
    </ContainerHeader>
  );
}
