import React, { useEffect, useState } from "react";
import { TripDetailsContainer, Button, TitleTD } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { getApi } from "../../services/api";

export default function TripDetails() {
  const [trip, setTrip] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const token = localStorage.getItem("token");
    token === null && goToPage(navigate, "login/");
    const getTrips = async () => {
      const res = await getApi(`trip/${params.id}`, token);
      setTrip(res.trip);
      trip || goToPage(navigate, "admin/trips/list/");
    };
    token && getTrips();
  }, []);
  return (
    <>
      {trip && (
        <TripDetailsContainer>
          <TitleTD>{trip.name}</TitleTD>
          <p>{"Nome: " + trip.name}</p>
          <p>{"Planeta: " + trip.planet}</p>
          <p>{"Data: " + trip.date}</p>
          <p>{trip.durationInDays + " Dias"}</p>
          <p>{trip.description}</p>
          Candidatos Pendentes
          {trip.candidates?.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })}
          Candidatos Arpovados
          {trip.approved?.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })}
          <Button onClick={() => goToPage(navigate, "admin/trips/list/")}>
            Voltar AdminHome
          </Button>
        </TripDetailsContainer>
      )}
    </>
  );
}
