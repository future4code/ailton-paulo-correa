import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 100px;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  grid-area: 1/1/2/2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px gray;
  height: 100%;
  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    :hover {
      text-decoration: underline;
    }
  }
`;

const Main = styled.main`
  grid-area: 2/1/3/2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  gap: 12px;
  border: 1px solid gray;
  border-radius: 12px;
  box-shadow: 0 0 8px black;
  h3 {
    margin: 0;
  }
`;

const Footer = styled.footer`
  grid-area: 3/1/4/2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px gray;
  height: 100%;
`;

const Input = styled.input`
  width: 320px;
`;

const DivUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  p {
    color: red;
    padding: 0 8px;
    border-radius: 12px;
    box-shadow: 0 0 8px black;
    margin: 0;
    :hover {
      background-color: #c4c4c4;
    }
  }
`;

const AvisoCerto = styled.p`
  padding: 0;
  margin: 0;
  color: green;
`;
const AvisoErro = styled.p`
  padding: 0;
  margin: 0;
  color: red;
`;

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

  deleteUser = (id) => {
    if (window.confirm("Deseja realmente deletar esse usuário?")) {
      axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      );
    }
  };

  createUser = () => {
    if (this.state.valueInputName !== "" && this.state.valueInputName !== " ") {
      if (
        this.state.valueInputEmail !== "" &&
        this.state.valueInputEmail !== " "
      ) {
        if (
          this.state.valueInputEmail.includes("@") === true &&
          this.state.valueInputEmail.includes(".") === true
        ) {
          const body = {
            name: this.state.valueInputName,
            email: this.state.valueInputEmail,
          };
          axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
              body,
              {
                headers: {
                  Authorization: "paulo-silva-ailton",
                },
              }
            )
            .then((response) => {
              this.getAllUsers();
              alert("Deu certo");
              this.setState({
                avisoCerto: "Cadastro realizado com sucesso!",
              });
            })
            .catch((error) => {
              alert("Erro");
            });

          this.setState({
            valueInputName: "",
            valueInputEmail: "",
          });
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

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "paulo-silva-ailton",
          },
        }
      )
      .then((response) => {
        this.setState({
          usuarios: response.data,
        });
      })
      .catch((error) => {
        alert("Erro");
      });
  };

  componentDidUpdate() {
    this.getAllUsers();
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    const arrayBuscaUsuarios = this.state.usuarios.filter((item) => {
      return item;
    });
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
            <Box>
              <h3>Cadastro de Usuários</h3>
              <label htmlFor="name">Nome</label>
              <Input
                id="name"
                value={this.state.valueInputName}
                onChange={this.onChangeName}
                onClick={this.resetAviso}
              />
              <label htmlFor="email">E-Mail</label>
              <Input
                id="email"
                value={this.state.valueInputEmail}
                onChange={this.onChangeEmail}
                onClick={this.resetAviso}
              />
              <button onClick={this.createUser}>Cadastrar</button>
              {this.state.avisoErro !== "" && (
                <AvisoErro>{this.state.avisoErro}</AvisoErro>
              )}
              {this.state.avisoCerto !== "" && (
                <AvisoCerto>{this.state.avisoCerto}</AvisoCerto>
              )}
            </Box>
          )}
          {this.state.page === "lista" && (
            <Box>
              <h3>Lista de Usuários Cadastrado</h3>
              {arrayBuscaUsuarios.length !== 0 ? (
                arrayBuscaUsuarios.map((item, index) => {
                  return (
                    <DivUsers key={item.id}>
                      <li>Nome: {item.name}</li>
                      <p
                        onClick={() => {
                          this.deleteUser(item.id);
                        }}
                      >
                        X
                      </p>
                    </DivUsers>
                  );
                })
              ) : (
                <p>Nenhum usuário encontrado!</p>
              )}
            </Box>
          )}
        </Main>
        <Footer>
          <p>Atividade de APIsç</p>
        </Footer>
      </Container>
    );
  }
}
