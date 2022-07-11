import React from "react";
import { TripDetailsContainer, Button } from "./styled";

export default function TripDetails(props) {
  return (
    <TripDetailsContainer>
      Login
      <Button onClick={() => props.setPage("adminHome")}>Voltar AdminHome</Button>
    </TripDetailsContainer>
  );
}
