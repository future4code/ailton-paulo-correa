import React, { useState, useEffect } from "react";
import {
  ContainerMatches,
  Header,
  LogoImg,
  Menu,
  LoadMatches,
  LoadingImgMatches,
} from "./MatchesStyled";
import logo from "../../assets/logo_heart.png";
import iconHome from "../../assets/home.png";
import { getMatches } from "../../services/astroAPI";
import { ListMatches } from "../../components/ListMatches";
import iconLoading from "../../assets/loading.png";

export default function Matches(props) {
  const [arrayMatches, setArrayMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMatches(setArrayMatches, setLoading);
  }, [props.auxClear]);

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
      {loading && (
        <LoadMatches>
          <LoadingImgMatches src={iconLoading} />
        </LoadMatches>
      )}
      {arrayMatches && <ListMatches arrayMatches={arrayMatches} />}
    </ContainerMatches>
  );
}
