import React from "react";
import {
  AdminHomeContainer,
  Button,
  Header,
  LineDiv,
  TittleAdmin,
} from "./styled";
import CardAdmin from "../../components/CardAdmin";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();
  return (
    <AdminHomeContainer>
      <Header>
        <TittleAdmin>AdminHome</TittleAdmin>
        <Button onClick={() => goToPage(navigate, "")}>Voltar</Button>
        <Button onClick={() => goToPage(navigate, "admin/create_trips/")}>
          Criar viagem
        </Button>
        <Button
          onClick={() => {
            goToPage(navigate, "login/");
            /* vai ter função de deslogar */
          }}
        >
          Desconectar
        </Button>
      </Header>
      <LineDiv />
      <CardAdmin />
      <CardAdmin />
      <CardAdmin />
      <CardAdmin />
      <CardAdmin />
      <CardAdmin />
      <CardAdmin />
    </AdminHomeContainer>
  );
}
