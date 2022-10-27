import React from "react";
import { ImgBaseURL } from "../../constants/Basic";
import { Character, Container, Name, PhotoActor } from "./styled";
import noPhoto from "../../assets/sem-foto.png";

export default function CardActor({ cast }) {
  const photoActor = cast.profile_path
    ? `${ImgBaseURL}${cast.profile_path}`
    : noPhoto;
  return (
    <Container>
      <PhotoActor img={photoActor} alt={`Foto de ${cast.name}`} />
      <Name>{cast.name}</Name>
      <Character>{cast.character}</Character>
    </Container>
  );
}
