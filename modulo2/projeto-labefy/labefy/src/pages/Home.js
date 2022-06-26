import React, { Component } from "react";
import styled from "styled-components";
import CardsPlaylist from "../components/CardsPlaylist";
import CardsPlaylistSugerido from "../components/CardsPlaylistSugerido";

const HomeContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fascinate&family=Kdam+Thmor+Pro&family=League+Gothic&display=swap");
  font-size: 17px;
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

const ButtonDetails = styled.p`
  color: #f2e3d5;
  font-weight: 700;
  font-size: 14px;
  padding: 2px 8px;
  background-color: #026773;
  border-radius: 4px 4px;
  border-bottom: none;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  :hover {
    text-decoration: underline;
  }
  :active {
    background-color: #024959;
  }
`;

const Button = styled.p`
  color: #026773;
  font-weight: 700;
  text-shadow: 1px 1px #f2e3d5;
  padding: 4px 12px;
  background-color: #f2e3d5;
  border-radius: 4px 4px;
  border: 2px solid #024959;
  border-bottom: none;
  :hover {
    text-decoration: underline;
  }
`;

const Musicas = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  gap: 12px;
  color: #f2e3d5;
  background-color: #026773;
  border-radius: 16px 16px;
  border: 2px solid #024959;
  border-bottom: none;
  box-shadow: 1px -1px 0 1px #024959, 1px 1px 8px rgba(0, 0, 0, 0.5);
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

const WarningError = styled.h4`
  color: red;
  text-align: center;
`;

const WarningConfirm = styled.h4`
  color: green;
  text-align: center;
`;

const Input = styled.input`
  height: 32px;
  width: 300px;
  font-size: 18px;
  padding: 0 8px;
  border-radius: 16px;
  border: 2px #026773 solid;
`;

const Tittle = styled.h4`
  color: #f2e3d5;
  text-shadow: 0.4px 0.4px 0.1px #f2e3d5, 1px 1px 1px black;
`;

export default class Home extends Component {
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
              onClickPageDetailsPL={this.props.onClickPageDetailsPL}
              playlistsSugeridas={this.props.playlistsSugeridas}
            />
            <h3>Suas Playlists</h3>
            <CardsPlaylist
              onClickPageDetailsPL={this.props.onClickPageDetailsPL}
              onClickPageCreatePL={this.props.onClickPageCreatePL}
              playlists={this.props.playlists}
            />
          </Main>
        )}
        {this.props.pageHome === "createPL" && (
          <Main>
            <h3>Criar Playlist</h3>
            <Input
              placeholder="Nome da playlist"
              value={this.props.valueInputPlaylist}
              onChange={this.props.onChangeInputPlaylist}
            />
            <Button onClick={this.props.createPlaylist}>Criar Playlist</Button>
            <Button onClick={this.props.onClickPageHome}>Voltar</Button>
            <WarningConfirm>{this.props.warningConfirm}</WarningConfirm>
            <WarningError>{this.props.WarningError}</WarningError>
          </Main>
        )}
        {this.props.pageHome === "detailsPL" && (
          <Main>
            {this.props.tocar && (
              <>
                <h3>Tocando a música</h3>
                <Tittle>
                  Música: {this.props.musica.name} | Artista:{" "}
                  {this.props.musica.artist}
                </Tittle>
                {this.props.urlFrame}
              </>
            )}
            <h3>Detalhes da Playlist</h3>
            {this.props.playlistSelect <= 6 || (
              <Button
                onClick={() =>
                  this.props.onClickPageAddTrack(this.props.playlistSelect)
                }
              >
                Adicionar nova música
              </Button>
            )}
            {this.props.playlistSelect <= 6 && <h3>Lista de Músicas</h3>}
            {this.props.playlistSelect <= 6 &&
              this.props.tracksSugeridas?.map((item) => {
                return (
                  <Musicas key={item.id}>
                    <p>
                      {item.name} - {item.artist}
                    </p>
                    <ButtonDetails onClick={() => this.props.player(item)}>
                      {"[TOCAR]"}
                    </ButtonDetails>
                  </Musicas>
                );
              })}
            {this.props.playlistSelect <= 6 ||
              (this.props.tracks.length !== 0 && <h3>Lista de Músicas</h3>)}
            {this.props.playlistSelect <= 6 ||
              this.props.tracks?.map((item) => {
                return (
                  <Musicas key={item.id}>
                    <p>
                      {item.name} - {item.artist}
                    </p>
                    <ButtonDetails onClick={() => this.props.player(item)}>
                      {"[TOCAR]"}
                    </ButtonDetails>
                    <ButtonDetails
                      onClick={() =>
                        this.props.removeTrackFromPlaylist(item.id)
                      }
                    >
                      {"[Deletar]"}
                    </ButtonDetails>
                  </Musicas>
                );
              })}
            <Button onClick={this.props.onClickPageHome}>Voltar</Button>
            {this.props.playlistSelect <= 6 || (
              <Button onClick={this.props.deletePlaylist}>
                Deletar Playlist
              </Button>
            )}
            <WarningConfirm>{this.props.warningConfirm}</WarningConfirm>
            <WarningError>{this.props.WarningError}</WarningError>
          </Main>
        )}
        {this.props.pageHome === "addTrack" && (
          <Main>
            <h3>Adicionar nova múisica na Playlist</h3>
            <Input
              placeholder="Nome da música"
              value={this.props.valueInputNameTrack}
              onChange={this.props.onChangeInputNomeTrack}
            />
            <Input
              placeholder="Nome do artista"
              value={this.props.valueInputArtistTrack}
              onChange={this.props.onChangeInputArtistTrack}
            />
            <Input
              placeholder="URL da música"
              value={this.props.valueInputUrlTrack}
              onChange={this.props.onChangeInputUrlTrack}
            />
            <Button onClick={this.props.addTrackToPlaylist}>
              Adicionar Música
            </Button>
            <Button onClick={this.props.onClickPageDetailsPL}>Voltar</Button>
            <WarningConfirm>{this.props.warningConfirm}</WarningConfirm>
            <WarningError>{this.props.WarningError}</WarningError>
          </Main>
        )}

        <Footer></Footer>
      </HomeContainer>
    );
  }
}
