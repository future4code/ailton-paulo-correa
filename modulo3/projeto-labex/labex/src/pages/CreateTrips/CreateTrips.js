import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { Button, CreateTripsContainer } from "./styled";

export default function CreateTrips() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    token === null && goToPage(navigate, "login/");
  }, []);
  return (
    <CreateTripsContainer>
      CreateTrips
      <Button onClick={() => goToPage(navigate,"admin/trips/list/")}>Voltar AdminHome</Button>
      <Button onClick={() => {"função de criar"} }>Criar</Button>
    </CreateTripsContainer>
  );
}
