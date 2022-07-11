import React from "react";
import { AdminHomeContainer, Button } from "./styled";
import CardAdmin from "../../components/CardAdmin";

export default function AdminHome(props) {
  return (
    <AdminHomeContainer>
      AdminHome
      <Button onClick={() => props.setPage("home")}>Voltar home</Button>
      <Button onClick={() => props.setPage("createTrips")}>Criar viagem</Button>
      <Button
        onClick={() => {
          props.setPage("login");
          /* vai ter função de deslogar */
        }}
      >
        Desconectar
      </Button>
      <CardAdmin setPage={props.setPage}/>
    </AdminHomeContainer>
  );
}
