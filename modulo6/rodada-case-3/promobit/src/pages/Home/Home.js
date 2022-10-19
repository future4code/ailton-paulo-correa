import React, { useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie/CardMovie";
import GenreButton from "../../components/GenreButton/GenreButton";
import Header from "../../components/Header/Header";
import GetGenres from "../../services/request/GetGenres";
import GetMovies from "../../services/request/GetMovies";
import * as St from "./styled";

export default function Home() {
  const [movies, setMovies] = useState(undefined);
  const [genres, setGenres] = useState(undefined);
  useEffect(() => {
    const getsValues = async () => {
      await GetMovies(1, setMovies);
      await GetGenres(setGenres);
    };
    getsValues();
  }, []);
  const showGenres = genres?.map((genre) => <GenreButton genre={genre.name} />);
  const showMovies = movies?.results?.map((movie) => (
    <CardMovie movie={movie} />
  ));
  console.log(showMovies);
  return (
    <St.Container>
      <Header />
      <St.FilterBox>
        <St.Space />
        <St.BoxDescription>
          <St.Description>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </St.Description>
        </St.BoxDescription>
        <St.Space />
        <St.FilterTitle>FILTRE POR:</St.FilterTitle>
        <St.GenreBox>{showGenres}</St.GenreBox>
        <St.Space />
      </St.FilterBox>
      <St.MoviesSection>
        {showMovies}
      </St.MoviesSection>
    </St.Container>
  );
}
