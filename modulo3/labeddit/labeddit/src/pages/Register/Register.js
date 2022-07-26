import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
  ContarinerRegister,
  TitleRegister,
  DivInputRegister,
  PlaceHolderName,
  FormRegister,
  ButtonRegister,
  TermText,
  HyperText,
  TermAccept,
  DivTermAccept,
  CheckBoxTerm,
  PlaceHolderPW,
  PlaceHolderEmail,
} from "./style";
import { Input } from "../../components/Global/GeneralStyle";
import { useForm } from "../../hooks/useForm";
import { goTo } from "../../routes/Coordinator";

export default function Register() {
  const { form, onChange, clearForm } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPW, setFocusPW] = useState(false);
  const navigate = useNavigate();

  function submitRegister(e) {
    e.preventDefault();
    goTo(navigate, "feed");
    clearForm();
  }
  return (
    <>
      <Header />
      <ContarinerRegister>
        <TitleRegister>{"Olá, boas vindas ao LabEddit ;)"}</TitleRegister>

        <FormRegister onSubmit={submitRegister}>
          <DivInputRegister
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(form.name ? true : false)}
          >
            <PlaceHolderName focusInput={focusName}>
              Nome de usuário
            </PlaceHolderName>
            <Input name="name" onChange={onChange} value={form.name} required />
          </DivInputRegister>
          <DivInputRegister
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(form.email ? true : false)}
          >
            <PlaceHolderEmail focusInput={focusEmail}>E-mail</PlaceHolderEmail>
            <Input
              name="email"
              onChange={onChange}
              value={form.email}
              type="email"
              required
            />
          </DivInputRegister>
          <DivInputRegister
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
          </DivInputRegister>
          <TermText>
            {`Ao continuar, você concorda com o nosso `}
            <HyperText>Contrato de usuário</HyperText> {` e nossa `}
            <HyperText>Política de Privacidade</HyperText>.
          </TermText>
          <DivTermAccept>
            <CheckBoxTerm
              id="checkTerm"
              name="checkTerm"
              onChange={onChange}
              type="checkbox"
              required
            />
            <TermAccept htmlFor="checkTerm">
              Eu concordo em receber emails sobre coisas legais no Labeddit.
            </TermAccept>
          </DivTermAccept>
          <ButtonRegister>Cadastrar</ButtonRegister>
        </FormRegister>
      </ContarinerRegister>
    </>
  );
}
