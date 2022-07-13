import React from "react";
import { useNavigate } from "react-router-dom";
import { CardAdminContainer } from "../pages/AdminHome/styled";
import {
  BoxButton,
  Button,
  ButtonDetail,
  TitleCard,
} from "../pages/TripDetails/styled";
import { goToPage } from "../routes/coordinator";

export default function CardAdmin(props) {
  const navigate = useNavigate();
  return (
    <CardAdminContainer>
      <TitleCard>{props.name}</TitleCard>
      <BoxButton>
        <ButtonDetail onClick={() => {
          goToPage(navigate, `admin/trips/${props.id}`);
        }}>Detalhes</ButtonDetail>
        <ButtonDetail>Deletar</ButtonDetail>
      </BoxButton>
    </CardAdminContainer>
  );
}
