import React from "react";
import { LoginContainer, Button } from "./styled";

export default function Login(props) {
  return (
    <LoginContainer>
      Login
      <Button onClick={() => props.setPage("home")}>Voltar Home</Button>
      <Button onClick={() => props.setPage("adminHome")}>Logar</Button>
    </LoginContainer>
  );
}
