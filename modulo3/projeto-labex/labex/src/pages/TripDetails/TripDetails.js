import React from "react";
import { TripDetailsContainer, Button } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";

export default function TripDetails() {
  const navigate = useNavigate();
  return (
    <TripDetailsContainer>
      Login
      <Button onClick={() => goToPage(navigate, "admin/")}>
        Voltar AdminHome
      </Button>
    </TripDetailsContainer>
  );
}
