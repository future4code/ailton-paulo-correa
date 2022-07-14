import React from "react";
import { ContainerCardLT, TitleCardLT } from "../pages/ListTrips/styled";

export default function CardListTrips(props) {
  return (
    <ContainerCardLT>
      <TitleCardLT>{props.trip.name}</TitleCardLT>
      <p>Nome: {props.trip.name}</p>
      <p>Descrição: {props.trip.description}</p>
      <p>Planeta: {props.trip.planet}</p>
      <p>Duração: {props.trip.durationInDays}</p>
      <p>Data: {props.trip.date}</p>
    </ContainerCardLT>
  );
}
