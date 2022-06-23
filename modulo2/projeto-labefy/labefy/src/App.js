import React, { Component } from "react";
import styled from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const Container = styled.div`
  flex: 1;
  background-color: #262626;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-items: ${(props) => (props.page !== "home" ? "center" : "stretch")};
`;

export default class App extends Component {
  state = {
    valueInputUser: "",
    valueInputPassword: "",
    page: "home",
    users: [
      {
        id: 1,
        user: "teste",
        password: "teste",
      },
    ],
  };

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
        {this.state.page === "home" && <Home />}
      </Container>
    );
  }
}

// background #262626
