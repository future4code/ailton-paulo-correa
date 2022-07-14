import React from "react";
import { useNavigate } from "react-router-dom";
import { CardAdminContainer } from "../pages/AdminHome/styled";
import {
  BoxButton,
  ButtonDetail,
  TitleCard,
} from "../pages/TripDetails/styled";
import { goToPage } from "../routes/coordinator";
import { deleteTrip } from "../services/api";

export default function CardAdmin(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <CardAdminContainer>
      <TitleCard>{props.name}</TitleCard>
      <BoxButton>
        <ButtonDetail
          onClick={() => {
            goToPage(navigate, `admin/trips/${props.id}`);
          }}
        >
          Detalhes
        </ButtonDetail>
        <ButtonDetail
          onClick={() => deleteTrip(`trips/${props.id}`, token, props.setTrips)}
        >
          Deletar
        </ButtonDetail>
      </BoxButton>
    </CardAdminContainer>
  );
}
