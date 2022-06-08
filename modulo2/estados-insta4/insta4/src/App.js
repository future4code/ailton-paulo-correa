import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/id/60/200/200"}
          fotoPost={"https://picsum.photos/id/600/200/200"}
        />
        <Post
          nomeUsuario={"Pelé"}
          fotoUsuario={"https://picsum.photos/id/10/200/200"}
          fotoPost={"https://picsum.photos/id/100/200/200"}
        />
        <Post
          nomeUsuario={"Alguém"}
          fotoUsuario={"https://picsum.photos/id/20/200/200"}
          fotoPost={"https://picsum.photos/id/200/200/200"}
        />
      </MainContainer>
    );
  }
}

export default App;
