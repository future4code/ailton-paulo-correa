import React from "react";
import * as St from "./styled";
import { ImgBaseURL } from "../../constants/Basic";

export default function CardMovie({ movie }) {
  console.log(movie);
  const imgPoster = `${ImgBaseURL}${movie.poster_path}`;
  const options = {day:"numeric",month:"short", year:"numeric"}
  const formatDate= movie.release_date.toLocaleString("pt-BR",options)
  const datat = new Date().toLocaleString("pt-BR",options)
  return (
    <St.Container>
      <St.Poster img={imgPoster} />
      <St.Title>{movie.title}</St.Title>
      <St.ReleaseDate>{formatDate}</St.ReleaseDate>
    </St.Container>
  );
}
