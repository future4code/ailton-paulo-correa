import React from "react";
import * as St from "./styled";
import { ImgBaseURL } from "../../constants/Basic";
import { formatDate } from "../../services/formatDate/formatDate";

export default function CardMovie({ movie }) {
  const imgPoster = `${ImgBaseURL}${movie.poster_path}`;
  const date = formatDate(movie.release_date);

  return (
    <St.Container>
      <St.Poster img={imgPoster} />
      <St.Title>{movie.title}</St.Title>
      <St.ReleaseDate>{date}</St.ReleaseDate>
    </St.Container>
  );
}
