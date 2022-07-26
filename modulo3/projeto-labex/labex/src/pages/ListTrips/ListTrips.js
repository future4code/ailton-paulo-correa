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
import Loading from "../../components/Loading";

export default function ListTrips() {
  const [trips, setTrips] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoad(true);
    const getTrips = async () => {
      const res = await getApi("trips/");
      setTrips(res.trips);
      setLoad(false);
    };
    getTrips();
  }, []);
  return (
    <TripsContainer>
      <Header>
        <TitleListTrips>Lista de Viagens</TitleListTrips>
        <Button onClick={() => goToPage(navigate, "")}>Voltar</Button>
        <Button onClick={() => goToPage(navigate, "trips/application/")}>
          Inscrição
        </Button>
      </Header>
      <LineDiv />
      {load && <Loading/>}
      {!load &&
      <BoxCards>
        {trips?.map((item) => {
          return <CardListTrips trip={item} key={item.id} />;
        })}
      </BoxCards>}
    </TripsContainer>
  );
}
