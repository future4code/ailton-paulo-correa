import React, { useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie/CardMovie";
import FooterPagination from "../../components/FooterPagination/FooterPagination";
import GenreButton from "../../components/GenreButton/GenreButton";
import Header from "../../components/Header/Header";
import GetGenres from "../../services/request/GetGenres";
import GetMovies from "../../services/request/GetMovies";
import * as St from "./styled";

export default function Home() {
  const [movies, setMovies] = useState(undefined);
  const [genres, setGenres] = useState(undefined);
  const [pagination, setPagination] = useState(1);
  const [selectGenres, setSelectGenres] = useState([]);
  const [screen, setScreen] = useState(window.innerWidth);
  const minCards = screen / 176;
  const detecteSize = () => {
    setScreen(window.innerWidth);
  };

  window.addEventListener("resize", detecteSize);

  useEffect(() => {
    (async () => {
      await GetMovies(pagination, setMovies);
      if (!genres) await GetGenres(setGenres);
    })();
  }, [genres, pagination]);

  const showGenres = genres?.map((genre) => (
    <GenreButton
      genre={genre}
      selectGenres={selectGenres}
      setSelectGenres={setSelectGenres}
      key={genre.id}
    />
  ));
  const movieList = movies?.filter((movie) => {
    if (!selectGenres.length) return movie;
    else {
      const findGenre = movie.genre_ids.filter((id) => {
        return selectGenres.indexOf(id) >= 0;
      });
      return findGenre.length;
    }
  });

  if (movieList?.length && movieList?.length < minCards) {
    for (let i = movieList.length; i < minCards; i++) {
      movieList.push(undefined);
    }
  }

  const showMovies = movieList?.map((movie, index) => (
    <CardMovie movie={movie} key={movie ? movie.id : `a${index}`} />
  ));

  return (
    <>
      <Header />
      <St.Container>
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
        <St.SectionMovies>
          <St.DivGrid>
            <St.MoviesSection>{showMovies}</St.MoviesSection>
          </St.DivGrid>
        </St.SectionMovies>
      </St.Container>
      {!selectGenres.length && (
        <FooterPagination
          pagination={pagination}
          setPagination={setPagination}
        />
      )}
    </>
  );
}
