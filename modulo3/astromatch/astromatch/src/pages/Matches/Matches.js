import React, { useState, useEffect } from "react";
import { ContainerMatches, Header, LogoImg, Menu } from "./MatchesStyled";
import logo from "../../assets/logo_heart.png";
import iconHome from "../../assets/home.png";
import { getMatches } from "../../services/astroAPI";
import { ListMatches } from "../../components/ListMatches";

export default function Matches(props) {
  const [arrayMatches, setArrayMatches] = useState([]);

  useEffect(() => {
    getMatches(setArrayMatches);
  }, []);

  return (
    <ContainerMatches>
      <Header>
        <div className="logo">
          <LogoImg src={logo} />
          <h1>AstroMatch</h1>
        </div>
        <Menu onClick={() => props.setPage("home")}>
          <img src={iconHome} />
          <p>Voltar</p>
        </Menu>
      </Header>
      <ListMatches arrayMatches={arrayMatches} />
    </ContainerMatches>
  );
}
