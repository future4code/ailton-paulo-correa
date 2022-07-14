import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardListTrips from "../../components/CardListTrips";
import { goToPage } from "../../routes/coordinator";
import { getApi } from "../../services/api";
import {
  TripsContainer,
  Button,
  Header,
  TitleListTrips,
  LineDiv,
  BoxCards,
} from "./styled";

export default function ListTrips() {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTrips = async () => {
      const res = await getApi("trips/");
      setTrips(res.trips);
    };
    getTrips();
  }, []);
  return (
    <TripsContainer>
      <Header>
        <TitleListTrips>List Trips</TitleListTrips>
        <Button onClick={() => goToPage(navigate, "")}>Voltar</Button>
        <Button onClick={() => goToPage(navigate, "trips/application/")}>
          Inscrição
        </Button>
      </Header>
      <LineDiv />
      <BoxCards>
        {trips?.map((item) => {
          return <CardListTrips trip={item} key={item.id} />;
        })}
      </BoxCards>
    </TripsContainer>
  );
}
