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

  const onClickLogin = async (e) => {
    e.preventDefault();
    const res = await postApi("login", form, undefined);
    !res.token && alert(res.response.data.message);
    res.token && window.localStorage.setItem("token", res.token);
    res.token && goToPage(navigate, "admin/trips/list/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && goToPage(navigate, "admin/trips/list/");
  }, []);
  return (
    <LoginContainer>
      <TitleLogin>Login</TitleLogin>
      <DivInputs onSubmit={onClickLogin}>
        <Input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-Mail"
          type={"email"}
          required
        />
        <Input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          type={"password"}
          required
        />
        <Button>Conectar</Button>
      </DivInputs>
      <DivButton>
        <Button onClick={() => goToPage(navigate, "")}>Voltar</Button>
      </DivButton>
    </LoginContainer>
  );
}
