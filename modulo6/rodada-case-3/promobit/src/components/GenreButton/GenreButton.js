import React, { useState } from "react";
import * as St from "./styled";
import deselect from "../../assets/deselect.png";

export default function GenreButton({ genre }) {
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <St.Button
      onClick={() => setHasClicked(!hasClicked)}
      hasClicked={hasClicked}
    >
      {genre}
      {hasClicked && <St.Img src={deselect} />}
    </St.Button>
  );
}
