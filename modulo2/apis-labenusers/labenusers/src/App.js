import React, { Component } from "react";
import axios from "axios";
import { Container, Header, Main, Footer } from "./components/styled";
import RegisterUsers from "./components/pages/RegisterUsers";
import ListUsers from "./components/pages/ListUsers";
import UserDetail from "./components/pages/UserDetail";

export default class App extends Component {
  state = {
    page: "register",
    valueInputName: "",
    valueInputEmail: "",
    usuarios: [],
    infoUsuarios: [],
    avisoErro: "",
    avisoCerto: "",
    valueInputEmailEdit: "",
    valueInputNameEdit: "",
    valueIdEdit: "",
    valueBusca: "",
    filterUsers: [],
  };

  onClickPageRegister = () => {
    this.setState({
      page: "register",
    });
  };

  onClickPageList = () => {
    this.setState({
      page: "list",
      avisoErro: "",
      avisoCerto: "",
      valueInputEmailEdit: "",
      valueInputNameEdit: "",
    });
    this.getAllUsers();
  };

  onClickPageDetail = (id) => {
    this.setState({
      page: "detail",
      avisoErro: "",
      avisoCerto: "",
    });
    this.getUserById(id);
    this.setState({
      valueIdEdit: id,
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

  getUserById = async (id) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
      this.setState({
        infoUsuarios: response.data,
        valueInputEmailEdit: response.data.email,
        valueInputNameEdit: response.data.name,
      });
    } catch (error) {
      alert(
        `Erro ${error.response.request.status} - ${error.response.request.statusText}: ${error.response.data.message}`
      );
    }
  };
  deleteUserEdit = async (id) => {
    await this.deleteUser(id);
    this.onClickPageList();
    this.setState({
      valueInputEmailEdit: "",
      valueInputNameEdit: "",
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
      } catch (error) {
        alert(
          `Erro ${error.response.request.status} - ${error.response.request.statusText}: ${error.response.data.message}`
        );
      }
    }
    await this.getAllUsers();
    alert("Deletado com sucesso!");
  };

  onChangeBusca = (event) => {
    this.setState({
      valueBusca: event.target.value,
    });
  };

  editUser = async (id) => {
    try {
      const body = {
        name: this.state.valueInputNameEdit,
        email: this.state.valueInputEmailEdit,
      };
      axios.put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        body,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
    } catch (error) {
      this.setState({
        avisoErro: `Erro ${error.response.request.status} - ${error.response.request.statusText}: ${error.response.data.message}`,
      });
    }
    alert("Usuário editado com sucesso!");
    this.onClickPageList();
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

  onChangeNameEdit = (event) => {
    this.setState({
      valueInputNameEdit: event.target.value,
    });
  };

  onChangeEmailEdit = (event) => {
    this.setState({
      valueInputEmailEdit: event.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <nav>
            <ul>
              <li onClick={this.onClickPageRegister}>Cadastrar Usuários</li>
              <li onClick={this.onClickPageList}>Lista de Usuários</li>
            </ul>
          </nav>
        </Header>
        <Main>
          {this.state.page === "register" && (
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
          {this.state.page === "list" && (
            <ListUsers
              valueBusca={this.state.valueBusca}
              onChangeBusca={this.onChangeBusca}
              onClickPageDetail={this.onClickPageDetail}
              usuarios={this.state.usuarios}
              usuariosFiltrados={this.state.filterUsers}
              deleteUser={this.deleteUser}
            />
          )}
          {this.state.page === "detail" && (
            <UserDetail
              buscar={this.buscar}
              editUser={this.editUser}
              deleteUserEdit={this.deleteUserEdit}
              onChangeEmailEdit={this.onChangeEmailEdit}
              onChangeNameEdit={this.onChangeNameEdit}
              valueInputEmailEdit={this.state.valueInputEmailEdit}
              valueInputNameEdit={this.state.valueInputNameEdit}
              onClickPageList={this.onClickPageList}
              deleteUser={this.deleteUser}
              valueIdEdit={this.state.valueIdEdit}
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
