import React, { useState } from "react";
import {
  HomeContainer,
  ButtonLeft,
  ButtonRight,
  DivButton,
  Logo,
} from "./styled";

export default function Home(props) {
  return (
    <HomeContainer>
      <Logo>LabeX</Logo>
      <DivButton>
        <ButtonLeft onClick={() => props.setPage("login")}>
          Botão Admin
        </ButtonLeft>
        <ButtonRight onClick={() => props.setPage("listTrips")}>
          Botão Viagens
        </ButtonRight>
      </DivButton>
    </HomeContainer>
  );
}
