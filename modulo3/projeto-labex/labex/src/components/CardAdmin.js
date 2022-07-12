import React from "react";
import { useNavigate } from "react-router-dom";
import { CardAdminContainer } from "../pages/AdminHome/styled";
import { goToPage } from "../routes/coordinator";

export default function CardAdmin() {
  const navigate = useNavigate();
  return (
    <CardAdminContainer
      onClick={() => {
        goToPage(navigate,"admin/trip_details");
      }}
    >
      CardAdmin
    </CardAdminContainer>
  );
}
