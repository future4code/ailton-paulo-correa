import React from "react";
import { Circle, Container, SVG, TextLoading } from "./styled";

export default function Loading() {
  return (
    <Container>
      <SVG>
        <Circle r="45" cx="50" cy="50" />
      </SVG>
      <TextLoading>Carregando ...</TextLoading>
    </Container>
  );
}
