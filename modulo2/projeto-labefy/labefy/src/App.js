import React, { Component } from "react";
import styled from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import axios from "axios";
import Dog1 from "./assets/dog-oxe.jpg";
import Dog2 from "./assets/dog-profundo.png";
import Dog3 from "./assets/dog-therock.png";

const Container = styled.div`
  flex: 1;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.page !== "home" ? "center" : "stretch")};
`;

const Player = styled.iframe`
  border-radius: 12px;
  width: 80%;
  height: 480px;
  border: 2px solid #024959;
`;

const UrlBroken = styled.div`
  background-image: url(${Dog1});
  width: 400px;
  height: 400px;
  background-size: cover;
  :hover {
    background-image: url(${Dog2});
  }
  :active {
    background-image: url(${Dog3});
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    width: 300px;
    height: 300px;
  }
`;

const AvisoUrl = styled.h4`
  color: #f2e3d5;
  background-color: black;
  justify-content: center;
  padding: 4px;
  text-shadow: 0.4px 0.4px 0.1px #f2e3d5, 1px 1px 1px black;
`;
export default class App extends Component {
  state = {
    playlistsSugeridas: [
      {
        id: 1,
        name: "Top 10",
      },
    ],
    playlists: {},
    warningError: "",
    warningConfirm: "",
    resultSearchPlaylist: [],
    tracks: [],
    tracksSugeridas: [
      {
        id: 1,
        name: "「Koko」 (Kyosougiga Opening)",
        artist: "Tamurapan",
        url: "https://www.youtube.com/watch?v=oYDKDrQaJ9Q",
      },
      {
        id: 2,
        name: "Akuma no Ko",
        artist: "Ai Higuchi",
        url: "https://www.youtube.com/watch?v=N4F3bjlL_H4",
      },
      {
        id: 3,
        name: "Hino do Pouso Alegre",
        artist: "Pouso Alegre Futebol Clube",
        url: "https://www.youtube.com/watch?v=DCfv1n4geis",
      },
      {
        id: 4,
        name: "Goblin",
        artist: "SULLI",
        url: "https://www.youtube.com/watch?v=X57QwGO2kXM",
      },
      {
        id: 5,
        name: "Seimeisen (TSUKIHIME Opening Remake Game)",
        artist: "ReoNa",
        url: "https://www.youtube.com/watch?v=I6_URO9e6cs",
      },
      {
        id: 6,
        name: "Winding Road (Golden Kamuy Opening)",
        artist: "MAN WITH A MISSION",
        url: "https://www.youtube.com/watch?v=YG4Jp7-N05E",
      },
      {
        id: 7,
        name: "Tempo Perdido",
        artist: "Legião Urbana",
        url: "https://www.youtube.com/watch?v=EKhCqxpysX4",
      },
      {
        id: 8,
        name: "Não sei viver sem ter você",
        artist: "CPM 22",
        url: "https://open.spotify.com/track/3QbPw4Aj3JgqG0In3ZPZ4q?si=fbce859415a74a09",
      },
      {
        id: 9,
        name: "LILAC",
        artist: "IU",
        url: "https://www.youtube.com/watch?v=v7bnOxV4jAc",
      },
      {
        id: 10,
        name: "Labyrinth",
        artist: "ORANGE RANGE",
        url: "https://www.youtube.com/watch?v=TpuZxKjiWIc",
      },
    ],
    valueInputUser: "",
    valueInputPassword: "",
    valueInputPlaylist: "",
    playlistSelect: "",
    page: "login",
    pageHome: "home",
    users: [
      {
        id: 1,
        user: "teste",
        password: "teste",
      },
    ],
    valueInputNameTrack: "",
    valueInputArtistTrack: "",
    valueInputUrlTrack: "",
    tocar: false,
    musica: "",
    urlFrame: "",
  };

  //Funções Axio/////////////////////////////////////////////////////

  getAllPlaylists = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );

      this.setState({
        playlists: response.data.result,
      });
    } catch (error) {
      this.setState({
        warningError: error.message,
      });
    }
  };

  searchPlaylist = async (name) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${name}`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      this.setState({
        resultSearchPlaylist: response.data,
        playlistSelect: response.data.result.playlist[0].id,
      });
    } catch (error) {
      this.setState({
        warningError: error.message,
      });
    }
  };

  getPlaylistTracks = async (id) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      this.setState({
        tracks: response.data.result.tracks,
      });
    } catch (error) {
      this.setState({
        warningError: error.message,
      });
    }
  };

  createPlaylist = async () => {
    try {
      const body = {
        name: this.state.valueInputPlaylist,
      };
      await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      await this.getAllPlaylists();
      this.onClickPageAddTrack();
      await this.searchPlaylist(this.state.valueInputPlaylist);
      this.setState({
        valueInputPlaylist: "",
      });
    } catch (error) {
      this.setState({
        warningError: error.message,
      });
    }
  };

  addTrackToPlaylist = async () => {
    try {
      const body = {
        name: this.state.valueInputNameTrack,
        artist: this.state.valueInputArtistTrack,
        url: this.state.valueInputUrlTrack,
      };
      await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelect}/tracks`,
        body,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      await this.getPlaylistTracks(this.state.playlistSelect);
      this.setState({
        warningConfirm: "Música adicionada!",
        valueInputNameTrack: "",
        valueInputArtistTrack: "",
        valueInputUrlTrack: "",
      });
    } catch (error) {
      this.setState({
        warningError: error.message,
      });
    }
  };

  deletePlaylist = async () => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelect}`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      await this.getAllPlaylists();
      this.setState({
        pageHome: "home",
        tocar: false,
        musica: "",
        urlFrame: "",
      });
      this.setState({
        warningConfirm: "Playlist deletada!",
      });
    } catch (error) {
      this.setState({
        warningError: error.message,
      });
    }
  };

  removeTrackFromPlaylist = async (idTrack) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelect}/tracks/${idTrack}`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      await this.getPlaylistTracks(this.state.playlistSelect);
      this.setState({
        warningConfirm: "Música removida!",
      });
    } catch (error) {
      this.setState({
        warningError: error.message,
      });
    }
  };

  //Funções Básicas/////////////////////////////////////////////////////

  componentDidMount() {
    this.getAllPlaylists();
  }
  
  onChangeInputNomeTrack = (event) => {
    this.setState({
      valueInputNameTrack: event.target.value,
      warningError: "",
      warningConfirm: "",
    });
  };

  onChangeInputArtistTrack = (event) => {
    this.setState({
      valueInputArtistTrack: event.target.value,
      warningError: "",
      warningConfirm: "",
    });
  };

  onChangeInputUrlTrack = (event) => {
    this.setState({
      valueInputUrlTrack: event.target.value,
      warningError: "",
      warningConfirm: "",
    });
  };

  onChangeInputUser = (event) => {
    this.setState({
      valueInputUser: event.target.value,
      warningError: "",
    });
  };

  onChangeInputPassword = (event) => {
    this.setState({
      valueInputPassword: event.target.value,
      warningError: "",
    });
  };

  onClickPageRigister = () => {
    this.setState({
      page: "register",
      valueInputUser: "",
      valueInputPassword: "",
      warningError: "",
    });
  };

  onClickPageHome = () => {
    this.setState({
      pageHome: "home",
      warningError: "",
      warningConfirm: "",
      tocar: false,
      musica: "",
      urlFrame: "",
    });
  };
  onClickPageCreatePL = () => {
    this.setState({
      pageHome: "createPL",
      warningError: "",
      warningConfirm: "",
    });
  };

  onClickPageDetailsPL = async (id) => {
    this.setState({
      pageHome: "detailsPL",
      playlistSelect: id,
      warningError: "",
      warningConfirm: "",
      tocar: false,
      musica: "",
      urlFrame: "",
    });
    id <= 6 || (await this.getPlaylistTracks(id));
  };

  teste = () => {};

  onClickPageAddTrack = (id) => {
    this.setState({
      pageHome: "addTrack",
      playlistSelect: id,
      warningError: "",
      warningConfirm: "",
    });
  };

  onClickPageLogin = () => {
    this.setState({
      page: "login",
      valueInputUser: "",
      valueInputPassword: "",
      warningError: "",
      warningConfirm: "",
    });
  };

  validateUser = (user) => {
    let existsUser = false;
    for (const item of this.state.users) {
      if (item.user.toLowerCase() === user.toLowerCase()) {
        existsUser = true;
      }
    }
    return existsUser;
  };

  validatePassword = (pw) => {
    let existsPassword = false;
    for (const item of this.state.users) {
      if (
        item.password === pw &&
        this.state.valueInputUser.toLowerCase() === item.user.toLowerCase()
      ) {
        existsPassword = true;
      }
    }
    return existsPassword;
  };

  onClickLogin = () => {
    if (this.state.valueInputUser !== "") {
      if (this.state.valueInputPassword !== "") {
        const existsUser = this.validateUser(this.state.valueInputUser);
        const existsPassword = this.validatePassword(
          this.state.valueInputPassword
        );
        if (existsUser) {
          if (existsPassword) {
            this.setState({
              page: "home",
              warningError: "",
            });
          } else {
            this.setState({
              warningError: "Senha incorreta!",
            });
          }
        } else {
          this.setState({
            warningError: "Usuário não existente!",
          });
        }
      } else {
        this.setState({
          warningError: "Informe sua senha!",
        });
      }
    } else {
      this.setState({
        warningError: "Informe o usuário!",
      });
    }
  };

  onClickRegister = () => {
    if (this.state.valueInputUser !== "") {
      if (this.state.valueInputPassword !== "") {
        const existsUser = this.validateUser(this.state.valueInputUser);
        if (existsUser) {
          this.setState({
            warningError: "Usuário já está sendo utilizado!",
          });
        } else {
          const cloneUsers = [
            ...this.state.users,
            {
              id: Date.now(),
              user: this.state.valueInputUser,
              password: this.state.valueInputPassword,
            },
          ];
          this.setState({
            page: "home",
            users: cloneUsers,
            warningError: "",
          });
        }
      } else {
        this.setState({
          warningError: "Informe a senha!",
        });
      }
    } else {
      this.setState({
        warningError: "Informe um usuário!",
      });
    }
  };

  onChangeInputPlaylist = (event) => {
    this.setState({
      valueInputPlaylist: event.target.value,
      warningError: "",
      warningConfirm: "",
    });
  };

  player = (item) => {
    if (item.id === this.state.musica.id) {
      this.setState({
        tocar: !this.state.tocar,
        musica: item,
      });
    } else {
      this.setState({
        tocar: true,
        musica: item,
      });
    }

    if (item.url.toLowerCase().includes("youtube")) {
      if (item.url.toLowerCase().includes("embed") === false) {
        const arrayUrl = item.url.split(".com/");
        const final = arrayUrl[1].split("watch?v=");
        const urlEmbed = `${arrayUrl[0]}.com/embed/${final[1]}`;
        this.setState({
          urlFrame: <Player src={urlEmbed} />,
        });
      } else {
        this.setState({
          urlFrame: <Player src={item.url} />,
        });
      }
    } else if (item.url.toLowerCase().includes("spotify")) {
      if (item.url.toLowerCase().includes("embed") === false) {
        const arrayUrl = item.url.split(".com/");
        const urlEmbed = `${arrayUrl[0]}.com/embed/${arrayUrl[1]}`;
        this.setState({
          urlFrame: <Player src={urlEmbed} />,
        });
      } else {
        this.setState({
          urlFrame: <Player src={item.url} />,
        });
      }
    } else {
      this.setState({
        urlFrame: (
          <UrlBroken>
            <AvisoUrl>
              Algo deu errado com o link da música e ela não pode ser
              reproduzida!
            </AvisoUrl>
          </UrlBroken>
        ),
      });
    }
  };

  render() {
    return (
      <Container page={this.state.page}>
        {this.state.page === "login" && (
          <Login
            warningError={this.state.warningError}
            onClickPageRigister={this.onClickPageRigister}
            onClickLogin={this.onClickLogin}
            valueInputUser={this.state.valueInputUser}
            valueInputPassword={this.state.valueInputPassword}
            onChangeInputUser={this.onChangeInputUser}
            onChangeInputPassword={this.onChangeInputPassword}
          />
        )}
        {this.state.page === "register" && (
          <Register
            warningError={this.state.warningError}
            onClickPageLogin={this.onClickPageLogin}
            onClickRegister={this.onClickRegister}
            valueInputUser={this.state.valueInputUser}
            valueInputPassword={this.state.valueInputPassword}
            onChangeInputUser={this.onChangeInputUser}
            onChangeInputPassword={this.onChangeInputPassword}
          />
        )}
        {this.state.page === "home" && (
          <Home
            tocar={this.state.tocar}
            player={this.player}
            musica={this.state.musica}
            urlFrame={this.state.urlFrame}
            deletePlaylist={this.deletePlaylist}
            removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            tracks={this.state.tracks}
            tracksSugeridas={this.state.tracksSugeridas}
            addTrackToPlaylist={this.addTrackToPlaylist}
            onClickPageAddTrack={this.onClickPageAddTrack}
            playlistSelect={this.state.playlistSelect}
            onChangeInputNomeTrack={this.onChangeInputNomeTrack}
            onChangeInputArtistTrack={this.onChangeInputArtistTrack}
            onChangeInputUrlTrack={this.onChangeInputUrlTrack}
            warningError={this.state.warningError}
            warningConfirm={this.state.warningConfirm}
            valueInputPlaylist={this.state.valueInputPlaylist}
            onChangeInputPlaylist={this.onChangeInputPlaylist}
            createPlaylist={this.createPlaylist}
            pageHome={this.state.pageHome}
            onClickPageHome={this.onClickPageHome}
            playlistsSugeridas={this.state.playlistsSugeridas}
            onClickPageDetailsPL={this.onClickPageDetailsPL}
            onClickPageCreatePL={this.onClickPageCreatePL}
            playlists={this.state.playlists}
          />
        )}
      </Container>
    );
  }
}
