import React, { useEffect, useState } from "react";
import {
  ContainerHome,
  Header,
  LogoImg,
  Menu,
  Footer,
  Button,
} from "./HomeStyled";
import logo from "../../assets/logo_heart.png";
import iconMatches from "../../assets/icon_matches.png";
import iconConfirm from "../../assets/confirme.png";
import iconCancel from "../../assets/cancel.png";
import { Card } from "../../components/Card";
import { getProfileToChoose, choosePerson } from "../../services/astroAPI";

export default function Home(props) {
  const [pessoa, setPessoa] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfileToChoose(setPessoa, setLoading);
  }, []);
  return (
    <ContainerHome>
      <Header>
        <div className="logo">
          <LogoImg src={logo} />
          <h1>AstroMatch</h1>
        </div>
        <Menu onClick={() => props.setPage("matches")}>
          <img src={iconMatches} />
          <p>Matches</p>
        </Menu>
      </Header>
      <Card pessoa={pessoa} loading={loading} />
      <Footer>
        <Button
          icon={iconCancel}
          onClick={() => choosePerson(pessoa.id, false, setPessoa, setLoading)}
        />
        <Button
          icon={iconConfirm}
          onClick={() => choosePerson(pessoa.id, true, setPessoa, setLoading)}
        />
      </Footer>
    </ContainerHome>
  );
}
