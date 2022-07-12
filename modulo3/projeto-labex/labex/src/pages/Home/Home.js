import React from "react";
import {
  HomeContainer,
  ButtonLeft,
  ButtonRight,
  DivButton,
  Logo,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";

export default function Home() {
  const navigate = useNavigate();  
  return (
    <HomeContainer>
      <Logo>LabeX</Logo>
      <DivButton>
        <ButtonLeft onClick={() => goToPage(navigate, "login/")}>
          Botão Admin
        </ButtonLeft>
        <ButtonRight onClick={() => goToPage(navigate, "trips/")}>
          Botão Viagens
        </ButtonRight>
      </DivButton>
    </HomeContainer>
  );
}
