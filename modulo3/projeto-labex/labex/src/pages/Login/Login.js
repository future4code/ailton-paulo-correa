import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
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
  const { form, onChange, clearForm } = useForm({ email: "", password: "" });

  const onClickLogin = async () => {
    const res = await postApi("login", form, undefined);
    window.localStorage.setItem("token", res.token);
    res && goToPage(navigate, "admin/trips/list/");
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
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-Mail"
          type={"email"}
        />
        <Input
          name="password"
          value={form.password}
          onChange={onChange}
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
