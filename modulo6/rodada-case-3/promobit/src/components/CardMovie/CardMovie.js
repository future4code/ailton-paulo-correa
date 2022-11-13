import React from "react";
import * as St from "./styled";
import { ImgBaseURL } from "../../constants/Basic";
import { formatDate } from "../../services/formatDate/formatDate";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/sem-imagem.png";

export default function CardMovie({ movie }) {
  const imgPoster = `${ImgBaseURL}${movie?.poster_path}`;
  const date = formatDate(movie?.release_date);
  const movieName = movie?.title
    .replaceAll("-", "$")
    .replaceAll(" ", "-")
    .replaceAll("/", "-");
  const navigate = useNavigate();
  return (
    <>
      <St.Container
        isEmpty={!movie}
        onClick={() =>
          movie && goToPage(navigate, `/movie/${movie.id}/${movieName}`)
        }
      >
        {movie && (
          <>
            <St.Poster img={movie?.poster_path ? imgPoster : noImage} />
            <St.Title>{movie.title}</St.Title>
            <St.ReleaseDate>{date}</St.ReleaseDate>
          </>
        )}
      </St.Container>
    </>
  );
}
