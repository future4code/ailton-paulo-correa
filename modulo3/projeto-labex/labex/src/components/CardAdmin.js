import React from "react";
import { CardAdminContainer } from "../pages/AdminHome/styled";

export default function CardAdmin(props) {
  return (
    <CardAdminContainer
      onClick={() => {
        props.setPage("tripDetails");
      }}
    >
      CardAdmin
    </CardAdminContainer>
  );
}
