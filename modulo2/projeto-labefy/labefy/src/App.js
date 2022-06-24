import React, { Component } from "react";
import styled from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import axios from "axios";

const Container = styled.div`
  flex: 1;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.page !== "home" ? "center" : "stretch")};
`;

export default class App extends Component {
  state = {
    playlistsSugeridas: [
      {
        id: 1,
        name: "Músicas de anime",
      },
      {
        id: 2,
        name: "Otaku",
      },
      {
        id: 3,
        name: "Músicas de desenho japones",
      },
      {
        id: 4,
        name: "animes",
      },
      {
        id: 5,
        name: "Mantaku",
      },
      {
        id: 6,
        name: "Pop",
      },
    ],
    playlists: {},
    warningError: "",
    resultSearchPlaylist: [],
    tracks: [],
    valueInputUser: "",
    valueInputPassword: "",
    valueInputPlaylist: "",
    page: "home",
    pageHome: "detailsPL",
    users: [
      {
        id: 1,
        user: "teste",
        password: "teste",
      },
    ],
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
      console.log(error.message);
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
      console.log("searchPlaylist:", response.data);
      this.setState({
        resultSearchPlaylist: response.data,
      });
    } catch (error) {
      console.log(error.message);
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
      console.log("getPlaylistTracks:", response.message);
      this.setState({
        tracks: response.data,
      });
    } catch (error) {
      console.log(error.message);
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
      this.onClickPageAddTrack();
    } catch (error) {
      console.log(error.message);
    }
  };

  addTrackToPlaylist = async (id) => {
    try {
      const body = {
        name: "",
        artist: "",
        url: "",
      };
      await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        body,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      console.log("addTrackToPlaylist foi");
    } catch (error) {
      console.log(error.message);
    }
  };

  deletePlaylist = async (id) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      console.log("deletePlaylist foi");
    } catch (error) {
      console.log(error.message);
    }
  };

  removeTrackFromPlaylist = async (idPl, idTrack) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPl}/tracks/${idTrack}`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      console.log("removeTrackFromPlaylist foi");
    } catch (error) {
      console.log(error.message);
    }
  };

  //Funções Básicas/////////////////////////////////////////////////////

  componentDidMount() {
    this.getAllPlaylists();
  }

  onChangeInputUser = (event) => {
    this.setState({
      valueInputUser: event.target.value,
    });
  };

  onChangeInputPassword = (event) => {
    this.setState({
      valueInputPassword: event.target.value,
    });
  };

  onClickPageRigister = () => {
    this.setState({
      page: "register",
      valueInputUser: "",
      valueInputPassword: "",
    });
  };

  onClickPageHome = () => {
    this.setState({
      pageHome: "home",
    });
  };
  onClickPageCreatePL = () => {
    this.setState({
      pageHome: "createPL",
    });
  };

  onClickPageDetailsPL = () => {
    this.setState({
      pageHome: "detailsPL",
    });
  };
  onClickPageAddTrack = () => {
    this.setState({
      pageHome: "addTrack",
    });
  };

  onClickPageLogin = () => {
    this.setState({
      page: "login",
      valueInputUser: "",
      valueInputPassword: "",
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
      if (item.password === pw) {
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
          alert("Pode entra fi");
          if (existsPassword) {
            alert("go home");
            this.setState({
              page: "home",
            });
          } else {
            alert("é mintiri num podi entra");
          }
        } else {
          alert("só entra quem fala a senha");
        }
      } else {
        alert("num pode né?");
      }
    } else {
      alert("ué? quem é tu?");
    }
  };

  onClickRegister = () => {
    if (this.state.valueInputUser !== "") {
      if (this.state.valueInputPassword !== "") {
        const existsUser = this.validateUser(this.state.valueInputUser);
        const existsPassword = this.validatePassword(
          this.state.valueInputPassword
        );
        if (existsUser) {
          alert("usuario ja existente");
        } else {
          alert("é de cria");
          this.setState({
            page: "home",
          });
        }
      } else {
        alert("só entra quem fala a senha");
      }
    } else {
      alert("ué? ninguem? gaspar?");
    }
  };

  onChangeInputPlaylist = (event) => {
    if (event.target.value !== "" && event.target.value !== " ") {
      this.setState({
        valueInputPlaylist: event.target.value,
      });
    } else {
      this.setState({
        warningError: "Preencha o nome da playlist!",
      });
    }
  };

  render() {
    return (
      <Container page={this.state.page}>
        {this.state.page === "login" && (
          <Login
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
            warningError={this.state.warningError}
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

// background #262626
