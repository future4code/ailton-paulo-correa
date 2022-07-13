import React from "react";
import { useNavigate } from "react-router-dom";
import CardListTrips from "../../components/CardListTrips";
import { goToPage } from "../../routes/coordinator";
import { TripsContainer, Button, Header, TitleListTrips, LineDiv, BoxCards } from "./styled";

export default function ListTrips() {
  const navigate = useNavigate();
  return (
    <TripsContainer>
      <Header>        
        <TitleListTrips>List Trips</TitleListTrips>
        <Button onClick={() => goToPage(navigate,"")}>Voltar</Button>
        <Button onClick={() => goToPage(navigate,"trips/application/")}>Inscrição</Button>
      </Header>
      <LineDiv />
      <BoxCards>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
        <CardListTrips/>
      </BoxCards>
    </TripsContainer>
  );
}
