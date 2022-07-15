import React from "react";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import { ContainerApp, ButtonClear } from "./AppStyled";
import { useState } from "react";
import { clear } from "./services/astroAPI";

export default function App() {
  const [page, setPage] = useState("home");
  const [auxClear, setAuxClear] = useState("");

  return (
    <ContainerApp>
      {page === "home" && (
        <Home setPage={setPage} setAuxClear auxClear={auxClear} />
      )}
      {page === "matches" && <Matches setPage={setPage} auxClear={auxClear} />}
      <ButtonClear onClick={() => clear(setAuxClear)}>
        Clear Swipes e Matches
      </ButtonClear>
    </ContainerApp>
  );
}
