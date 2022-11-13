import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../../components/CardMovie/CardMovie";
import CardActor from "../../components/CardActor/CardActor";
import CardCrew from "../../components/CardCrew/CardCrew";
import Header from "../../components/Header/Header";
import { ImgBaseURL } from "../../constants/Basic";
import GetCredits from "../../services/request/GetCredits";
import GetMovieById from "../../services/request/GetMovieById";
import GetReleaseDates from "../../services/request/GetReleaseDates";
import GetTrailer from "../../services/request/GetTrailer";
import GetRecomendations from "../../services/request/GetRecomendations";
import * as St from "./styled";
import { DivGrid, MoviesSection } from "../Home/styled";
import Loading from "../../components/Loading/Loading";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(undefined);
  const [releaseDate, setReleaseDate] = useState(undefined);
  const [credits, setCredits] = useState(undefined);
  const [trailer, setTrailer] = useState(undefined);
  const [recomendations, setRecomendations] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState(window.innerWidth);
  const minCards =
    screen > 1040 ? (screen - 224) / 176 - 1 : (screen - 40) / 154;
  const detecteSize = () => {
    setScreen(window.innerWidth);
  };

  window.addEventListener("resize", detecteSize);

  useEffect(() => {
    setLoading(true);
    const getValues = async () => {
      await GetMovieById(id, setMovie);
      await GetReleaseDates(id, setReleaseDate);
      await GetCredits(id, setCredits);
      await GetTrailer(id, setTrailer);
      await GetRecomendations(id, setRecomendations);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    getValues();
  }, [id]);

  const findAgeGroup = releaseDate
    ?.filter((release) => release.iso_3166_1 === "BR")
    .map((release) => release.release_dates[0]);
  const ageGroup = findAgeGroup?.length
    ? findAgeGroup[0].certification
      ? `${findAgeGroup[0].certification} anos`
      : "Livre"
    : "Indisponível";
  const genres = movie?.genres.map((genre) => genre.name).join(", ");
  const date = `${new Date(movie?.release_date).toLocaleDateString()} (BR)`;
  const voteAverage = (movie?.vote_average * 10).toFixed(0);
  const runtime = `${(movie?.runtime / 60).toFixed(0)}h${movie?.runtime % 60}m`;
  const jobFind = ["characters", "director", "screenplay"];

  const showCrews = credits?.crew
    .sort((a, b) => {
      if (a.job < b.job) return -1;
      if (a.job > b.job) return 1;
      return 0;
    })
    .filter((crew) => jobFind.indexOf(crew.job.toLowerCase()) >= 0)
    .map((crew, index) => <CardCrew crew={crew} key={index} />);

  const showCast = credits?.cast.map((cast) => (
    <CardActor cast={cast} key={cast.id} />
  ));

  if (recomendations?.length && recomendations?.length < minCards) {
    for (let i = recomendations.length; i < minCards; i++) {
      recomendations.push(undefined);
    }
  }

  const showRecomendations = recomendations?.map((movie, index) => (
    <CardMovie movie={movie} key={movie ? movie.id : `a${index}`} />
  ));
  return (
    <>
      <Header hasBack={true} />
      {loading && <Loading />}
      {!loading && (
        <St.Container>
          <St.BoxInfo>
            <St.DivPoster>
              <St.Poster
                src={`${ImgBaseURL}${movie.poster_path}`}
                alt={`Poster de ${movie.title}`}
              />
            </St.DivPoster>
            <St.BoxSinopse>
              <St.Title>{movie.title}</St.Title>
              <St.Space space={0.5} />
              <St.Details>
                {`${ageGroup} • ${date} • ${genres} • ${runtime}`}
              </St.Details>
              <St.Space space={1} />
              <St.BoxRating>
                <St.Rating>
                  <St.ProgressBar>
                    <St.Circle
                      r="29"
                      cx="30"
                      cy="30"
                      progress={voteAverage * 2}
                    />
                  </St.ProgressBar>
                  {`${voteAverage}%`}
                </St.Rating>
                <St.RatingText>Avaliação dos usuários</St.RatingText>
              </St.BoxRating>
              <St.Space space={2} />
              <St.BoxSinopseText>
                <St.SinopseTitle>Sinopse</St.SinopseTitle>
                <St.SinopseText>{movie.overview}</St.SinopseText>
              </St.BoxSinopseText>
              <St.Space space={1.5} />
              <St.BoxCrews>{showCrews}</St.BoxCrews>
              <St.Space space={1.5} />
            </St.BoxSinopse>
          </St.BoxInfo>
          <St.Space space={4.625} />
          <St.SectionDetails>
            <St.Box>
              <St.DetailsTitle>Elenco original</St.DetailsTitle>
              <St.Space space={1.5} />
              <St.ListCast>{showCast}</St.ListCast>
            </St.Box>
            <St.Space space={2.438} />
            <St.Box>
              {trailer?.length > 0 && (
                <>
                  <St.DetailsTitle>Trailer</St.DetailsTitle>
                  <St.Space space={1.5} />
                  <St.Iframe
                    src={`https://www.youtube.com/embed/${trailer[0].key}`}
                    title={trailer[0].name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <St.Space space={3.1} />
                </>
              )}
            </St.Box>
            {showRecomendations.length > 0 && (
              <>
                <St.DetailsTitle>Recomendações</St.DetailsTitle>
                <DivGrid>
                  <MoviesSection>{showRecomendations}</MoviesSection>
                </DivGrid>
              </>
            )}
          </St.SectionDetails>
          <St.Space space={7} />
        </St.Container>
      )}
    </>
  );
}
