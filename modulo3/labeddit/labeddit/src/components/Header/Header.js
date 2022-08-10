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
  const token = localStorage.getItem("token");
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
      {!token && (
        <ButtonHeader onClick={() => goTo(navigate, "")}>Entrar</ButtonHeader>
      )}
      {token && (
        <ButtonHeader
          onClick={() => {
            goTo(navigate, "");
            localStorage.setItem("token", "");
          }}
        >
          Logout
        </ButtonHeader>
      )}
    </ContainerHeader>
  );
}
