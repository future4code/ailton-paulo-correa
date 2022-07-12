import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { Button, CreateTripsContainer } from "./styled";

export default function CreateTrips() {
  const navigate = useNavigate();
  return (
    <CreateTripsContainer>
      CreateTrips
      <Button onClick={() => goToPage(navigate,"admin/")}>Voltar AdminHome</Button>
      <Button onClick={() => {"função de criar"} }>Criar</Button>
    </CreateTripsContainer>
  );
}
