import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import {
  Button,
  DivButton,
  Form,
  FormTripsContainer,
  Input,
  InputText,
  Option,
  OptionEpt,
  Select,
  Select2,
  TitleForm,
} from "./styled";

export default function FormTrips() {
  const [selectColor, setSelectColor] = useState("change");
  const [selectColor2, setSelectColor2] = useState("change");
  const navigate = useNavigate();
  return (
    <FormTripsContainer>
      <TitleForm>Inscrição para a viagem</TitleForm>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Idade" min={0} type={"number"} />
        <Input placeholder="Profissão" />
        <InputText minLength={30} maxLength={400} placeholder="Descrição" />
        <Select
          onChange={(e) => setSelectColor(e.target.value)}
          color={selectColor}
        >
          <OptionEpt value={"change"}>Escolha um País</OptionEpt>
          <Option>teste1</Option>
          <Option>teste2</Option>
          <Option>teste3</Option>
        </Select>
        <Select2
          onChange={(e) => setSelectColor2(e.target.value)}
          color={selectColor2}
        >
          <OptionEpt value={"change"}>Escolha uma Viagem</OptionEpt>
          <Option>teste1</Option>
          <Option>teste2</Option>
          <Option>teste3</Option>
        </Select2>
      </Form>
      <DivButton>
        <Button onClick={() => goToPage(navigate, "trips/")}>
          Voltar
        </Button>
        <Button
          onClick={() => {
            "função de enviar";
          }}
        >
          Enviar
        </Button>
      </DivButton>
    </FormTripsContainer>
  );
}
