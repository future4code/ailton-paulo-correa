import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { LoginContainer, Button, Input, DivButton, DivInputs, TittleLogin } from "./styled";

export default function Login(props) {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <TittleLogin>Login</TittleLogin>
      <DivInputs>
        <Input placeholder="E-Mail"/>
        <Input placeholder="Senha" type={"password"}/>
      </DivInputs>
      <DivButton>
        <Button onClick={() => goToPage(navigate, "")}>Voltar</Button>
        <Button
          onClick={() => {
            goToPage(navigate, "admin/");
          }}
        >
          Conectar
        </Button>
      </DivButton>
    </LoginContainer>
  );
}
