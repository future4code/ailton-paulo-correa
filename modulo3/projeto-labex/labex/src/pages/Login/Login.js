import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { postApi } from "../../services/api";
import {
  LoginContainer,
  Button,
  Input,
  DivButton,
  DivInputs,
  TitleLogin,
} from "./styled";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async () => {
    if (email.trim()) {
      if (password.trim()) {
        let body = {
          email: email,
          password: password,
        };
        const res = await postApi("login", body, undefined);
        res === "successfully" && goToPage(navigate, "admin/trips/list/");
      } else {
        alert("informe senha");
      }
    } else {
      alert("informe email");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    token && goToPage(navigate, "admin/trips/list/");
  }, []);
  return (
    <LoginContainer>
      <TitleLogin>Login</TitleLogin>
      <DivInputs>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail"
          type={"email"}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type={"password"}
        />
      </DivInputs>
      <DivButton>
        <Button onClick={() => goToPage(navigate, "")}>Voltar</Button>
        <Button onClick={onClickLogin}>Conectar</Button>
      </DivButton>
    </LoginContainer>
  );
}
