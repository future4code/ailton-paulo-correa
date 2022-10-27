import React from "react";
import * as St from "./styled";
import { ImgBaseURL } from "../../constants/Basic";
import { formatDate } from "../../services/formatDate/formatDate";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function CardMovie({ movie }) {
  const imgPoster = `${ImgBaseURL}${movie.poster_path}`;
  const date = formatDate(movie.release_date);
  const navigate = useNavigate();
  const movieName = movie.title.replaceAll(" ", "-");

  console.log(movie);
  return (
    <St.Container
      onClick={() => goToPage(navigate, `/movie/${movie.id}/${movieName}`)}
    >
      <St.Poster img={imgPoster} />
      <St.Title>{movie.title}</St.Title>
      <St.ReleaseDate>{date}</St.ReleaseDate>
    </St.Container>
  );
}
