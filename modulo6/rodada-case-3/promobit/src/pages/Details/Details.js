import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardActor from "../../components/CardActor/CardActor";
import CardCrew from "../../components/CardCrew/CardCrew";
import Header from "../../components/Header/Header";
import { ImgBaseURL } from "../../constants/Basic";
import GetCredits from "../../services/request/GetCredits";
import GetMovieById from "../../services/request/GetMovieById";
import GetReleaseDates from "../../services/request/GetReleaseDates";
import * as St from "./styled";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(undefined);
  const [releaseDate, setReleaseDate] = useState(undefined);
  const [credits, setCredits] = useState(undefined);

  useEffect(() => {
    const getValues = async () => {
      await GetMovieById(id, setMovie);
      await GetReleaseDates(id, setReleaseDate);
      await GetCredits(id, setCredits);
    };
    getValues();
  }, []);

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
  const jobFind = [
    "writing",
    "characters",
    "character",
    "director",
    "screenplay",
  ];

  const showCrews = credits?.crew
    .filter((crew) => jobFind.indexOf(crew.job.toLowerCase()) >= 0)
    .map((crew) => <CardCrew crew={crew} key={crew.id} />);

  const showCast = credits?.cast.map((cast) => (
    <CardActor cast={cast} key={cast.id} />
  ));

  console.log(credits?.cast);
  return (
    <div>
      <Header hasBack={true} />
      {movie && (
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
                <St.Rating>{`${voteAverage}%`}</St.Rating>
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
            <St.BoxCast>
              <St.CastTitle>Elenco original</St.CastTitle>
              <St.ListCast>{showCast}</St.ListCast>
            </St.BoxCast>
          </St.SectionDetails>
          <St.Space space={7} />
        </St.Container>
      )}
    </div>
  );
}
