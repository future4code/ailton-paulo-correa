import React, { Component } from "react";
import axios from "axios";
import { Container, Header, Main, Footer } from "./components/styled";
import RegisterUsers from "./components/pages/RegisterUsers";
import ListUsers from "./components/pages/ListUsers";

export default class App extends Component {
  state = {
    page: "cadastro",
    valueInputName: "",
    valueInputEmail: "",
    usuarios: [],
    avisoErro: "",
    avisoCerto: "",
  };
  onClickMenu1 = () => {
    this.setState({
      page: "cadastro",
    });
  };
  onClickMenu2 = () => {
    this.setState({
      page: "lista",
    });
  };
  onChangeName = (event) => {
    this.setState({
      valueInputName: event.target.value,
      avisoErro: "",
      avisoCerto: "",
    });
  };
  onChangeEmail = (event) => {
    this.setState({
      valueInputEmail: event.target.value,
      avisoErro: "",
      avisoCerto: "",
    });
  };
  deleteUser = async (id) => {
    if (window.confirm("Deseja realmente deletar esse usuário?")) {
      try {
        await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "paulo-silva-ailton",
            },
          }
        );
        this.getAllUsers();
      } catch (error) {
        alert(
          `Erro ${error.response.request.status} - ${error.response.request.statusText}: ${error.response.data.message}`
        );
      }
    }
  };
  createUser = async () => {
    if (this.state.valueInputName !== "" && this.state.valueInputName !== " ") {
      if (
        this.state.valueInputEmail !== "" &&
        this.state.valueInputEmail !== " "
      ) {
        if (
          this.state.valueInputEmail.includes("@") === true &&
          this.state.valueInputEmail.includes(".") === true
        ) {
          try {
            const body = {
              name: this.state.valueInputName,
              email: this.state.valueInputEmail,
            };
            await axios.post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
              body,
              {
                headers: {
                  Authorization: "paulo-silva-ailton",
                },
              }
            );
            this.getAllUsers();
            this.setState({
              avisoCerto: "Cadastro realizado com sucesso!",
            });
            this.setState({
              valueInputName: "",
              valueInputEmail: "",
            });
          } catch (error) {
            this.setState({
              avisoErro: `Erro ${error.response.request.status} - ${error.response.request.statusText}: ${error.response.data.message}`,
            });
          }
        } else {
          this.setState({
            avisoErro: "E-Mail inválido, preencha corretamente!",
          });
        }
      } else {
        this.setState({
          avisoErro: "Informe um E-Mail!",
        });
      }
    } else {
      this.setState({
        avisoErro: "Informe um Nome!",
      });
    }
  };
  getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      this.setState({
        usuarios: response.data,
      });
    } catch (error) {
      this.setState({
        avisoErro: `Erro ${error.response.request.status} - ${error.response.request.statusText}: ${error.response.data.message}`,
      });
    }
  };
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    return (
      <Container>
        <Header>
          <nav>
            <ul>
              <li onClick={this.onClickMenu1}>Cadastrar Usuários</li>
              <li onClick={this.onClickMenu2}>Lista de Usuários</li>
            </ul>
          </nav>
        </Header>
        <Main>
          {this.state.page === "cadastro" && (
            <RegisterUsers
              valueInputName={this.state.valueInputName}
              onChangeName={this.onChangeName}
              valueInputEmail={this.state.valueInputEmail}
              onChangeEmail={this.onChangeEmail}
              avisoErro={this.state.avisoErro}
              avisoCerto={this.state.avisoCerto}
              createUser={this.createUser}
            />
          )}
          {this.state.page === "lista" && (
            <ListUsers
              usuarios={this.state.usuarios.filter((item) => item)}
              deleteUser={this.deleteUser}
            />
          )}
        </Main>
        <Footer>
          <p>Atividade de APIs</p>
        </Footer>
      </Container>
    );
  }
}
