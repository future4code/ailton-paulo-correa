import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const NovoPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  width: 90%;
`;

const TitleNewPost = styled.h2`
  margin: 0;
  padding: 0;
`;

class App extends React.Component {
  state = {
    usuario: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/id/60/200/200",
        fotoPost: "https://picsum.photos/id/600/200/150",
      },
      {
        nomeUsuario: "Pelé",
        fotoUsuario: "https://picsum.photos/id/10/200/200",
        fotoPost: "https://picsum.photos/id/100/200/150",
      },
      {
        nomeUsuario: "Alguém",
        fotoUsuario: "https://picsum.photos/id/20/200/200",
        fotoPost: "https://picsum.photos/id/200/200/150",
      },
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  onChangeUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value,
    });
  };
  onChangeFotoUsuario = (event) => {
    this.setState({
      valorInputFotoUsuario: event.target.value,
    });
  };
  onChangeFotoPost = (event) => {
    this.setState({
      valorInputFotoPost: event.target.value,
    });
  };

  aoClicar = () => {
    let segura = [
      this.state.valorInputUsuario,
      this.state.valorInputFotoUsuario,
      this.state.valorInputFotoPost,
    ];
    if (Number(segura[1]) > 0) {
      segura[1] = `https://picsum.photos/id/${segura[1]}/200/150`;
    }
    if (Number(segura[2]) > 0) {
      segura[2] = `https://picsum.photos/id/${segura[2]}/200/150`;
    }

    let arrayNovo = [...this.state.usuario];
    arrayNovo.push({
      nomeUsuario: segura[0],
      fotoUsuario: segura[1],
      fotoPost: segura[2],
    });
    this.setState({
      usuario: [...arrayNovo],
      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    });
  };

  render() {
    const arrayPost = this.state.usuario.map((item, index) => {
      return (
        <Post
          nomeUsuario={item.nomeUsuario}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
          key={index}
        />
      );
    });

    return (
      <MainContainer>
        <NovoPostContainer>
          <TitleNewPost>Nova Postagem</TitleNewPost>
          <label>Nome de Usuário</label>
          <Input
            type="text"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder="Nome de Usuário"
          />
          <label>Foto de Perfil</label>
          <Input
            type="text"
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder="Link da foto ou um número de 1 a 999"
          />
          <label>Foto da Postagem</label>
          <Input
            type="text"
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder="Link da foto ou um número de 1 a 999"
          />
          <button onClick={this.aoClicar}>Adicionar</button>
        </NovoPostContainer>
        {arrayPost}
      </MainContainer>
    );
  }
}

export default App;
