import React from "react";
import { Button, CreateTripsContainer } from "./styled";

export default function CreateTrips(props) {
  return (
    <CreateTripsContainer>
      Login
      <Button onClick={() => props.setPage("adminHome")}>Voltar AdminHome</Button>
      <Button onClick={() => {"função de criar"} }>Criar</Button>
    </CreateTripsContainer>
  );
}
