import React from "react";
import { Container, Job, Name } from "./styled";

export default function CardCrew({ crew }) {
  return (
    <Container key={crew.id}>
      <Name> {crew.name}</Name>
      <Job>{crew.job}</Job>
    </Container>
  );
}
