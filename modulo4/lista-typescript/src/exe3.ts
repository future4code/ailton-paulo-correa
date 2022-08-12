enum GENRE {
  ACTION = "ação",
  DRAMA = "drama",
  COMEDY = "comédia",
  ROMANCE = "romance",
  HORROR = "terror",
}
type movieType = {
  name: string;
  yearRelease: number;
  genre: GENRE;
  score?: number;
};
const exe3 = (movie: movieType) => {
  return movie;
};
console.table(
  exe3({
    name: "Duna",
    yearRelease: 2021,
    genre: GENRE.ACTION,
  })
);
