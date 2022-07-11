import React from "react";
import CardListTrips from "../../components/CardListTrips";
import { TripsContainer, Button, Header, TitleListTrips, LineDiv, BoxCards } from "./styled";

export default function ListTrips(props) {
  return (
    <TripsContainer>
      <Header>        
        <Button onClick={() => props.setPage("home")}>LabeX</Button>
        <TitleListTrips>List Trips</TitleListTrips>
        <Button onClick={() => props.setPage("formTrips")}>Inscrição</Button>
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
