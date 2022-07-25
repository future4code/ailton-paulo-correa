import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { goTo } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Form, Input, DivInput } from "../../components/Global/GeneralStyle";
import {
  ContainerLogin,
  DivLogo,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  SubTitleLogin,
  TitleLogin,
  PlaceHolderName,
  PlaceHolderPW,
  ButtonLogin,
  LineDivisor,
  ButtonNewRegister,
} from "./style";

export default function Login() {
  const { form, onChange, clearForm } = useForm({
    name: "",
    password: "",
  });
  const [focusName, setFocusName] = useState(false);
  const [focusPW, setFocusPW] = useState(false);
  const navigate = useNavigate();

  function submitLogin(e) {
    e.preventDefault();
    goTo(navigate, "feed");
    clearForm();
  }
  return (
    <ContainerLogin>
      <DivLogo>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
      </DivLogo>
      <TitleLogin>LabEddit</TitleLogin>
      <SubTitleLogin>O projeto de rede social da Labenu</SubTitleLogin>
      <Form onSubmit={submitLogin}>
        <DivInput
          onFocus={() => setFocusName(true)}
          onBlur={() => setFocusName(form.name ? true : false)}
        >
          <PlaceHolderName focusInput={focusName}>Nome</PlaceHolderName>
          <Input name="name" onChange={onChange} value={form.name} required />
        </DivInput>
        <DivInput
          onFocus={() => setFocusPW(true)}
          onBlur={() => setFocusPW(form.password ? true : false)}
        >
          <PlaceHolderPW focusInput={focusPW}>Senha</PlaceHolderPW>
          <Input
            name="password"
            onChange={onChange}
            value={form.password}
            type="password"
            required
          />
        </DivInput>
        <ButtonLogin>Continuar</ButtonLogin>
      </Form>
      <LineDivisor />
      <ButtonNewRegister onClick={() => goTo(navigate, "register")}>
        Crie uma conta!
      </ButtonNewRegister>
    </ContainerLogin>
  );
}
