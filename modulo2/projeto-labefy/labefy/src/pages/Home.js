import React, { Component } from "react";
import styled from "styled-components";
import CardsPlaylist from "../components/CardsPlaylist";
import CardsPlaylistSugerido from "../components/CardsPlaylistSugerido";

const HomeContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fascinate&family=Kdam+Thmor+Pro&family=League+Gothic&display=swap");
  font-family: "Kdam Thmor Pro", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Header = styled.header`
  width: 88%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #024959;
  background-color: #026773;
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 2px 2px 0 2px #024959, 2px 2px 8px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  h1 {
    color: #f2e3d5;
    font-size: 36px;
    text-shadow: 0.4px 0.4px 1px #f2e3d5, 1px 1px 1px black;
    user-select: none;
  }
`;

const Main = styled.main`
  border: solid #026773 1px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 84vw;
  height: 100%;
  margin: 60px 0 100px 0;
  max-width: 1200px;
  gap: 20px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  h3 {
    color: #f2e3d5;
    text-shadow: 0.4px 0.4px 0.1px #f2e3d5, 1px 1px 1px black;
  }
`;

const Button = styled.p`
  color: #026773;
  text-shadow: 1px 1px f2e3d5;
  :hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  width: 88%;
  height: 80px;
  background-color: #026773;
  border-radius: 16px 16px 0 0;
  border: 2px solid #024959;
  border-bottom: none;
  box-shadow: 2px -2px 0 2px #024959, 2px 2px 8px rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
`;

export default class Home extends Component {
  state = {
    valueInputNameTrack: "",
    valueInputArtistTrack: "",
    valueInputUrlTrack: "",
  };

  onChangeInputNomeTrack = (event) => {
    this.setState({
      valueInputNameTrack: event.target.value,
    });
  };
  onChangeInputArtistTrack = (event) => {
    this.setState({
      valueInputArtistTrack: event.target.value,
    });
  };
  onChangeInputUrlTrack = (event) => {
    this.setState({
      valueInputUrlTrack: event.target.value,
    });
  };

  render() {
    return (
      <HomeContainer>
        <Header>
          <h1>LABEFY</h1>
        </Header>
        {this.props.pageHome === "home" && (
          <Main>
            <h3>Playlists Sugeridas</h3>
            <CardsPlaylistSugerido
              playlistsSugeridas={this.props.playlistsSugeridas}
            />
            <h3>Suas Playlists</h3>
            <CardsPlaylist
              onClickPageCreatePL={this.props.onClickPageCreatePL}
              playlists={this.props.playlists}
            />
          </Main>
        )}
        {this.props.pageHome === "createPL" && (
          <Main>
            <h3>Criar Playlist</h3>
            <input
              value={this.props.valueInputPlaylist}
              onChange={this.props.onChangeInputPlaylist}
            />
            <Button onClick={this.props.createPlaylist}>Criar Playlist</Button>
            <Button onClick={this.props.onClickPageHome}>Voltar</Button>
          </Main>
        )}
        {this.props.pageHome === "detailsPL" && (
          <Main>
            <h3>Detalhes da Playlist</h3>
            <Button onClick={this.props.addTrack}>Adicionar Playlist</Button>
            <Button onClick={this.props.onClickPageHome}>Voltar</Button>
          </Main>
        )}
        {this.props.pageHome === "addTrack" && (
          <Main>
            <h3>Adicionar nova múisica na Playlist</h3>
            <input
              value={this.state.valueInputNameTrack}
              onChange={this.onChangeInputNomeTrack}
            />
            <input
              value={this.state.valueInputArtistTrack}
              onChange={this.onChangeInputArtistTrack}
            />
            <input
              value={this.state.valueInputUrlTrack}
              onChange={this.onChangeInputUrlTrack}
            />
            <Button onClick={this.props.addTrack}>Adicionar Playlist</Button>
            <Button onClick={this.props.onClickPageHome}>Voltar</Button>
          </Main>
        )}

        <Footer></Footer>
      </HomeContainer>
    );
  }
}
