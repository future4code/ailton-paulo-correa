import React from "react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";
import {
  ButtonHeader,
  ContainerHeader,
  DivLogo,
  IconBack,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
} from "./style";
import back from "../../assets/postBack.png";

export default function Header({ page }) {
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      {page && page === "post" && (
        <IconBack src={back} onClick={() => goTo(navigate, "feed")} />
      )}
      <DivLogo>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
      </DivLogo>
      {true && (
        <ButtonHeader onClick={() => goTo(navigate, "")}>Entrar</ButtonHeader>
      )}
      {!true && (
        <ButtonHeader onClick={() => goTo(navigate, "")}>Logout</ButtonHeader>
      )}
    </ContainerHeader>
  );
}
