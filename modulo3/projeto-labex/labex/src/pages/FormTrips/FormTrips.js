import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listCountries } from "../../constants/constants";
import { useForm } from "../../hooks/useForm";
import { goToPage } from "../../routes/coordinator";
import { getApi, postApi } from "../../services/api";
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
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const { form, onChange, clearForm } = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  useEffect(() => {
    const getTrips = async () => {
      const res = await getApi("trips");
      setTrips(res.trips);
    };
    getTrips();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    await postApi(`trips/${form.trip}/apply`, form);
    alert("Inscrição feita com sucesso!");
    clearForm();
  };
  return (
    <FormTripsContainer>
      <TitleForm>Inscrição para a viagem</TitleForm>
      <Form onSubmit={submitForm}>
        <Input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern="^.{3,}"
          title={"Mínimo 3 caracteres"}
        />
        <Input
          name="age"
          type={"number"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          min={18}
          required
        />
        <Input
          placeholder="Profissão"
          name="profession"
          value={form.profession}
          onChange={onChange}
          required
          pattern="^.{10,}"
          title={"Mínimo 10 caracteres"}
        />
        <Input
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          required
          placeholder="Descrição do Candidato"
          pattern="^.{30,}"
          title={"Mínimo 30 caracteres"}
        />
        <Select
          name="country"
          onChange={onChange}
          color={form.country}
          defaultValue={form.country}
          required
        >
          <OptionEpt selected={undefined} label="Escolha seu País" disabled />
          {listCountries.map((item, index) => {
            return <Option key={index}>{item}</Option>;
          })}
        </Select>
        <Select2
          defaultValue={form.country}
          name="trip"
          onChange={onChange}
          color={form.trip}
          required
        >
          <OptionEpt selected={undefined} label="Escolha uma Viagem" disabled />
          {trips?.map((item) => {
            return (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            );
          })}
        </Select2>
        <Button>Enviar</Button>
      </Form>
      <DivButton>
        <Button onClick={() => goToPage(navigate, "trips/list/")}>
          Voltar
        </Button>
      </DivButton>
    </FormTripsContainer>
  );
}
