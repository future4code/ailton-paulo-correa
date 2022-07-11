import React from "react";
import { Button, FormTripsContainer } from "./styled";

export default function FormTrips(props) {
  return (
    <FormTripsContainer>
      Login
      <Button onClick={() => props.setPage("listTrips")}>Voltar listTrips</Button>
      <Button onClick={() => {"função de enviar"} }>Enviar</Button>
    </FormTripsContainer>
  );
}
