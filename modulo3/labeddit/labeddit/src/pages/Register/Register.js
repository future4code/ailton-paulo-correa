import React, { useEffect, useState } from "react";
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
import { requestData } from "../../services/requestApi";

export default function Register() {
  const [data, setData] = useState("");
  const { form, onChange, clearForm } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPW, setFocusPW] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!data) {
      if (data.status >= 400) {
        alert(data.data.message ? `Email invalido` : data.data);
      } else if (data.data.token) {
        alert(`${data.statusText}, ${data.data.token}`);
        localStorage.setItem("token", data.data.token);
        goTo(navigate, "feed");
        clearForm();
      } else {
        console.log("Erro não identicado,errp abaixo de 400");
      }
    }
  }, [data]);

  const submitRegister = async (e) => {
    e.preventDefault();
    await requestData("post", "users/signup", form, "", setData);
  };
  return (
    <>
      <Header />
      <ContarinerRegister>
        <TitleRegister>{"Olá, boas vindas ao LabEddit ;)"}</TitleRegister>

        <FormRegister onSubmit={submitRegister}>
          <DivInputRegister
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(form.username ? true : false)}
          >
            <PlaceHolderName focusInput={focusName}>
              Nome de usuário
            </PlaceHolderName>
            <Input
              name="username"
              onChange={onChange}
              value={form.username}
              required
            />
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
              pattern="[0-9a-zA-Z]{8,30}"
              title="Senha deve conter entre 8 e 30 caracteres!"
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
