import React, { useEffect, useState } from "react";
import * as St from "./styled";
import deselect from "../../assets/deselect.png";

export default function GenreButton({ genre, selectGenres, setSelectGenres }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) setSelectGenres([...selectGenres, genre.id]);
    else setSelectGenres(selectGenres.filter((item) => item !== genre.id));
  }, [selected]);
  
  return (
    <St.Button onClick={() => setSelected(!selected)} selected={selected}>
      {genre.name}
      {selected && <St.Img src={deselect} />}
    </St.Button>
  );
}
