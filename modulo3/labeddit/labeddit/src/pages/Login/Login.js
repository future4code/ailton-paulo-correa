import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { goTo } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  DivInput,
  LineDivisor,
} from "../../components/Global/GeneralStyle";
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
  ButtonNewRegister,
} from "./style";
import { requestData } from "../../services/requestApi";

export default function Login() {
  const [data, setData] = useState("");
  const { form, onChange, clearForm } = useForm({
    email: "",
    password: "",
  });
  const [focusName, setFocusName] = useState(false);
  const [focusPW, setFocusPW] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!data) {
      if (data.status >= 400) {
        // alert(data.data.message ? `Email invalido` : data.data);
        alert(data.data);
      } else if (data.data.token) {
        localStorage.setItem("token", data.data.token);
        goTo(navigate, "feed");
        clearForm();
      } else {
        console.log("Erro não identicado,erro abaixo de 400");
      }
    }
  }, [data]);

  const submitLogin = async (e) => {
    e.preventDefault();
    await requestData("post", "users/login", form, "", setData);
  };

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
          onBlur={() => setFocusName(form.email ? true : false)}
        >
          <PlaceHolderName focusInput={focusName}>E-mail</PlaceHolderName>
          <Input
            name="email"
            onChange={onChange}
            value={form.email}
            type="email"
            required
          />
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
            pattern="[0-9a-zA-Z]{8,30}"
            title="Senha deve conter entre 8 e 30 caracteres!"
            required
          />
        </DivInput>
        <ButtonLogin>Continuar</ButtonLogin>
      </Form>
      <LineDivisor top={"18px"} bottom={"18px"} />
      <ButtonNewRegister onClick={() => goTo(navigate, "register")}>
        Crie uma conta!
      </ButtonNewRegister>
    </ContainerLogin>
  );
}
