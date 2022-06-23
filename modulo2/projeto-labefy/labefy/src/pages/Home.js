import React, { Component } from "react";
import styled from "styled-components";

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
  gap: 20px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  h3 {
    color: #f2e3d5;
    text-shadow: 0.4px 0.4px 0.1px #f2e3d5, 1px 1px 1px black;
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

const ContainerMain = styled.div`
  min-height: 216px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
  gap: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  background-color: #026773;
  border-radius: 8px;
`;

const Box = styled.div`
  min-width: 260px;
  height: 200px;
  background-color: #f2e3d5;
  box-shadow: 2px 2px 0 2px #024959, 2px 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  color: #026773;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    background-color: #026773;
    color: #f2e3d5;
    box-shadow: 2px 2px 0 2px #f2e3d5, 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
`;

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header>
          <h1>LABEFY</h1>
        </Header>
        <Main>
          <h3>Playlists Sugeridas</h3>
          <ContainerMain>
            <Box />
            <Box />
            <Box />
            <Box />
          </ContainerMain>
          <h3>Suas Playlists</h3>
          <ContainerMain>
            <Box>+</Box>
          </ContainerMain>
        </Main>
        <Footer></Footer>
      </HomeContainer>
    );
  }
}
