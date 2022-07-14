import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { planetsList } from "../../constants/constants";
import { useForm } from "../../hooks/useForm";
import { goToPage } from "../../routes/coordinator";
import { postApi } from "../../services/api";
import {
  Button,
  CreateTripsContainer,
  DivButton,
  Form,
  Input,
  Option,
  OptionEpt,
  Select,
  TitleCreate,
} from "./styled";

export default function CreateTrips() {
  const navigate = useNavigate();
  const { form, onChange, clearForm } = useForm({
    planet: "",
    name: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    token === null && goToPage(navigate, "login/");
  }, []);
  const submitCreate = async (e) => {
    e.preventDefault();
    await postApi("trips", form, token);
    alert("Viagem criada com sucesso!");
    clearForm();
  };
  return (
    <CreateTripsContainer>
      <TitleCreate>Criar viagem</TitleCreate>
      <Form onSubmit={submitCreate}>
        <Input
          placeholder="Nome da viagem"
          name="name"
          value={form.name}
          onChange={onChange}
          required
          pattern="^.{5,}"
          title={"Mínimo 5 caracteres"}
        />
        <Select
          name="planet"
          onChange={onChange}
          color={form.planet}
          defaultValue={form.planet}
          required
        >
          <OptionEpt selected={undefined} label="Escolha um planeta" disabled />
          {planetsList.map((item, index) => {
            return <Option key={index}>{item}</Option>;
          })}
        </Select>
        <Input
          placeholder="Data da viagem"
          name="date"
          color={form.date}
          value={form.date}
          min={new Date(2055,1).toISOString().slice(0,10)}
          type={"date"}
          onChange={onChange}
          required
        />
        <Input
          placeholder="Descrição da viagem"
          name="description"
          value={form.description}
          onChange={onChange}
          required
          pattern="^.{30,}"
          title={"Mínimo 30 caracteres"}
        />
        <Input
          placeholder="Duração da viagem"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          type={"number"}
          required
          min={50}
        />
        <Button
          onClick={() => {
            "função de criar";
          }}
        >
          Criar
        </Button>
      </Form>
      <DivButton>
        <Button onClick={() => goToPage(navigate, "admin/trips/list/")}>
          Voltar
        </Button>
      </DivButton>
    </CreateTripsContainer>
  );
}
